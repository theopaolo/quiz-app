// src/app/admin/page.tsx
import { getQuizResults } from '@/lib/db';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default async function AdminPage() {
  const results = await getQuizResults();

  return (
    <div className="p-8">
      <Card>
        <CardHeader>
          <CardTitle>Résultats des Quiz</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Étudiant
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Score
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Durée
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {results.map((result) => (
                  <tr key={result.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {result.student_name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {new Date(result.date).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {result.percentage_score}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {Math.round(result.duration / 60)} min
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}