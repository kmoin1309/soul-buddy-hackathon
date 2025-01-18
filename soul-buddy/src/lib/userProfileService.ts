import { Db } from "@datastax/astra-db-ts";
import { UserProfile } from "./schemas";
import { connectToDatabase } from "./utils";

const db = connectToDatabase();
const collectionName = "user_profiles";

export async function createUserProfile(profile: UserProfile) {
  try {
    const collection = db.collection<UserProfile>(collectionName);
    const result = await collection.insertOne(profile);
    console.log(User profile inserted with ID: ${result.insertedId});
    return result;
  } catch (error) {
    console.error(Error inserting user profile: ${error.message});
    throw error;
  }
}

export async function getUserProfileByName(name: string) {
  try {
    const collection = db.collection<UserProfile>(collectionName);
    const userProfile = await collection.findOne({ name });
    return userProfile;
  } catch (error) {
    console.error(Error querying user profile: ${error.message});
    throw error;
  }
}

export async function updateUserProfile(name: string, updates: Partial<UserProfile>) {
  try {
    const collection = db.collection<UserProfile>(collectionName);
    const result = await collection.updateOne({ name }, { $set: updates });
    return result;
  } catch (error) {
    console.error(Error updating user profile: ${error.message});
    throw error;
  }
}

export async function deleteUserProfile(name: string) {
  try {
    const collection = db.collection<UserProfile>(collectionName);
    const result = await collection.deleteOne({ name });
    return result;
  } catch (error) {
    console.error(Error deleting user profile: ${error.message});
    throw error;
  }
}