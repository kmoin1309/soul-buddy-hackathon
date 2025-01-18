import { connectToDatabase } from "@/lib/utils";
import { UserProfile } from "@/lib/schemas";
import { NextResponse } from "next/server";

const db = connectToDatabase();
const usersCollection = db.collection<UserProfile>("user_profiles");

export async function POST(request: Request) {
  try {
    const userData = await request.json();
    await usersCollection.insertOne(userData);
    return NextResponse.json({ message: "User data saved successfully!" });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to save user data" },
      { status: 500 }
    );
  }
}