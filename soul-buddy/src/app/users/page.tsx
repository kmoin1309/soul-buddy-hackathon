"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

interface UserProfile {
  _id: string;
  name: string;
  email: string;
  dob: string;
  timeofbirth: string;
  rashi: string;
  gender: string;
  location: string;
}

export default function UsersPage() {
  const { data: session } = useSession();
  const [users, setUsers] = useState<UserProfile[]>([]);

  useEffect(() => {
    if (!session) {
      redirect("/auth/signin");
    }

    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, [session]);

  if (!session) {
    return null; // Redirecting, so no need to render anything
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">User Profiles</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Date of Birth</th>
            <th className="py-2 px-4 border-b">Time of Birth</th>
            <th className="py-2 px-4 border-b">Rashi</th>
            <th className="py-2 px-4 border-b">Gender</th>
            <th className="py-2 px-4 border-b">Location</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="py-2 px-4 border-b">{user._id}</td>
              <td className="py-2 px-4 border-b">{user.name}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">{user.dob}</td>
              <td className="py-2 px-4 border-b">{user.timeofbirth}</td>
              <td className="py-2 px-4 border-b">{user.rashi}</td>
              <td className="py-2 px-4 border-b">{user.gender}</td>
              <td className="py-2 px-4 border-b">{user.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}