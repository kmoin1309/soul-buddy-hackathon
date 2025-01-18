import NextAuth from "next-auth";
import { connectToDatabase } from "@/lib/utils";
import { UserProfile } from "@/lib/schemas";
import CredentialsProvider from "next-auth/providers/credentials";

const db = connectToDatabase();
const usersCollection = db.collection<UserProfile>("user_profiles");

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Check if the user exists in AstraDB
        const user = await usersCollection.findOne({ email: credentials?.email });

        if (user) {
          // Compare passwords (use a secure password hashing library like bcrypt in production)
          if (user.password === credentials?.password) {
            return user;
          }
        } else {
          // Create a new user if they don't exist
          const newUser = {
            name: credentials?.email.split("@")[0], // Default name
            email: credentials?.email,
            password: credentials?.password, // Store hashed password in production
            dob: "",
            timeofbirth: "",
            rashi: "",
            gender: "",
            location: "",
            vectorize: "",
          };
          await usersCollection.insertOne(newUser);
          return newUser;
        }

        return null; // Return null if authentication fails
      },
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      // Add user ID to the session
      if (user?.email) {
        const dbUser = await usersCollection.findOne({ email: user.email });
        session.user.id = dbUser?._id.toString();
      }
      return session;
    },
    async jwt({ token, user }) {
      // Add user data to the JWT token
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  pages: {
    signIn: "/auth/signin", // Custom sign-in page
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };