// apps/web/src/app/dashboard/page.tsx
import { auth, signOut } from '../../utils/auth';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const session = await auth();

  // If not authenticated, redirect to sign-in
  if (!session) {
    redirect('/auth/signin');
  }

  return (
    <div className="p-8">
      <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-md">
        <h1 className="mb-4 text-2xl font-bold">Dashboard</h1>
        <p className="mb-2">Welcome, {session.user.name || 'User'}!</p>
        <p className="mb-6 text-sm text-gray-600">
          You are signed in as {session.user.email} with role:{' '}
          {session.user.role || 'user'}
        </p>

        <div className="overflow-hidden overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Property
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Value
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {Object.entries(session.user).map(([key, value]) => (
                <tr key={key}>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                    {key}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    {typeof value === 'string' ? value : JSON.stringify(value)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <form
          action={async () => {
            'use server';
            await signOut({ redirectTo: '/' });
          }}
          className="mt-6">
          <button
            type="submit"
            className="rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700">
            Sign Out
          </button>
        </form>
      </div>
    </div>
  );
}
