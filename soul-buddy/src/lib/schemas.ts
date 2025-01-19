import { VectorizeDoc } from "@datastax/astra-db-ts";

export interface UserProfile extends VectorizeDoc {
  name: string;
  dob: string; // Date of Birth (e.g., "1990-01-01")
  timeofbirth: string; // Time of Birth (e.g., "14:30")
  rashi: string; // Zodiac sign or Rashi
  gender: string; // Gender (e.g., "Male", "Female", "Other")
  location: string; // Location (e.g., "New York, USA")
}