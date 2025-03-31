import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "username",
          placeholder: "Enter your username",
          type: "text",
        },
        password: {
          label: "password",
          placeholder: "Enter your password",
          type: "text",
        },
      },
      async authorize(credentials, req) {
        return {
          id: "",
          username: credentials?.username,
          password: credentials?.password,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
