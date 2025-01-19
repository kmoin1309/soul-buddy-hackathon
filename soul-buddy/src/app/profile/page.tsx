import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Your Profile</h1>
      <p className="mb-4">Welcome to your profile page.</p>
      <Link
        href="/users"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        View All Users
      </Link>
    </div>
  );
}