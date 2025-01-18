import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { DataAPIClient, Db } from "@datastax/astra-db-ts";

/**
 * Merges and conditionally applies Tailwind CSS classes.
 * @param inputs - Class names or class name objects.
 * @returns A string of merged class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Connects to a DataStax Astra database.
 * This function retrieves the database endpoint and application token from the
 * environment variables ASTRA_DB_ENDPOINT and ASTRA_DB_TOKEN.
 *
 * @returns An instance of the connected database.
 * @throws Will throw an error if the environment variables
 * ASTRA_DB_ENDPOINT or ASTRA_DB_TOKEN are not defined.
 */
export function connectToDatabase(): Db {
  const { ASTRA_DB_ENDPOINT: endpoint, ASTRA_DB_TOKEN: token } = process.env;

  if (!token || !endpoint) {
    throw new Error(
      "Environment variables ASTRA_DB_ENDPOINT and ASTRA_DB_TOKEN must be defined."
    );
  }

  // Create an instance of the DataAPIClient class with your token.
  const client = new DataAPIClient(token);

  // Get the database specified by your endpoint.
  const database = client.db(endpoint, {
    namespace: process.env.ASTRA_DB_NAMESPACE || "default_namespace", // Optional: Provide a default namespace
  });

  console.log(`Connected to database ${database.id}`);

  return database;
}
