import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { accounts } from "@/lib/db/schema/index";
import db from "@/lib/db/db";

export const { handlers, auth } = NextAuth({
  adapter: DrizzleAdapter(db, {
    accountsTable: accounts,
  }),
  providers: [Google],
});
