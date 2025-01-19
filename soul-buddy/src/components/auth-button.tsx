// src/components/AuthButtons.tsx
"use client";

import { signIn, useSession } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

const AuthButtons = () => {
  const { data: session } = useSession();

  if (session) {
      function signOut(): void {
          throw new Error("Function not implemented.");
      }

    return (
      <div className="text-center">
        <h2>Welcome, {session.user?.name}</h2>
        <button
          onClick={() => signOut()}
          className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <button
        onClick={() => signIn("google")}
        className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
      >
        <FaGoogle className="mr-2" />
        Sign in with Google
      </button>
      <button
        onClick={() => signIn("google", { callbackUrl: "/signup" })}
        className="flex items-center bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
      >
        <FaGoogle className="mr-2" />
        Sign up with Google
      </button>
    </div>
  );
};

export default AuthButtons;