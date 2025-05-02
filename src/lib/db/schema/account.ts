import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import type { AdapterAccountType } from "next-auth/adapters";

export const accounts = sqliteTable("account", {
  id: int("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  type: text("type").$type<AdapterAccountType>().notNull(),
  username: text("username").unique(),
  email: text("email").notNull().unique(),
  hashedPassword: text("hashed_password").notNull(),
  isPaidMember: int("is_paid_member", { mode: "boolean" })
    .default(false)
    .notNull(),
  donationEnabled: int("donation_enabled", { mode: "boolean" })
    .default(false)
    .notNull(),
  donationMessage: text("donation_message"),
  bannerImage: text("banner_image"),
  bio: text("bio"),
  image: text("image"),
  createdAt: int("created_at", { mode: "timestamp" }).notNull(),
  updatedAt: int("updated_at", { mode: "timestamp" }).notNull(),
  emailVerified: int("email_verified", { mode: "boolean" })
    .default(false)
    .notNull(),
  emailVerificationTokenExpiry: int("email_verification_token_expiry", {
    mode: "timestamp",
  }),
  passwordResetTokenExpiry: int("password_reset_token_expiry", {
    mode: "timestamp",
  }),
  passwordResetToken: text("password_reset_token"),
});
