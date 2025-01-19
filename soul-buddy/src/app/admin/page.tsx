import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <p className="mb-4">Manage your application from here.</p>
      <Link
        href="/users"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Manage Users
      </Link>
    </div>
  );
}