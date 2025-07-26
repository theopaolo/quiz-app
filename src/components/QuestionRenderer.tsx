import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface QuestionRendererProps {
  question: string;
}

export const QuestionRenderer: React.FC<QuestionRendererProps> = ({ question }) => {
  // Parse the question text to extract code blocks
  const parseQuestion = (text: string) => {
    const parts = [];
    const codeBlockRegex = /```javascript\n([\s\S]*?)\n```/g;
    let lastIndex = 0;
    let match;

    while ((match = codeBlockRegex.exec(text)) !== null) {
      // Add text before the code block
      if (match.index > lastIndex) {
        const beforeText = text.slice(lastIndex, match.index);
        if (beforeText.trim()) {
          parts.push({
            type: 'text',
            content: beforeText,
            key: `text-${parts.length}`
          });
        }
      }

      // Add the code block
      parts.push({
        type: 'code',
        content: match[1],
        key: `code-${parts.length}`
      });

      lastIndex = match.index + match[0].length;
    }

    // Add any remaining text after the last code block
    if (lastIndex < text.length) {
      const remainingText = text.slice(lastIndex);
      if (remainingText.trim()) {
        parts.push({
          type: 'text',
          content: remainingText,
          key: `text-${parts.length}`
        });
      }
    }

    return parts.length > 0 ? parts : [{ type: 'text', content: text, key: 'text-0' }];
  };

  const questionParts = parseQuestion(question);

  return (
    <div className="space-y-3">
      {questionParts.map((part) => {
        if (part.type === 'code') {
          return (
            <SyntaxHighlighter
              key={part.key}
              language="javascript"
              style={tomorrow}
              customStyle={{
                margin: 0,
                borderRadius: '6px',
                fontSize: '14px',
                background: '#1e1e1e',
              }}
              showLineNumbers={false}
              wrapLines={true}
              wrapLongLines={true}
            >
              {part.content}
            </SyntaxHighlighter>
          );
        } else {
          return (
            <p key={part.key} className="text-lg font-medium leading-relaxed">
              {part.content.trim()}
            </p>
          );
        }
      })}
    </div>
  );
};