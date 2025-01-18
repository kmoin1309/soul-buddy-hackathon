import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Menu</h2>
      <ul className="space-y-2">
        <li>
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>
        </li>
        <li>
          <Link href="/users" className="hover:text-blue-500">
            Users
          </Link>
        </li>
        <li>
          <Link href="/auth/signin" className="hover:text-blue-500">
            Sign In
          </Link>
        </li>
      </ul>
    </div>
  );
}