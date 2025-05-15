import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user", {
  id: int("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  username: text("username").unique(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  isPaidMember: int("is_paid_member").default(0).notNull(),
  donationEnabled: int("donation_enabled").default(0).notNull(),
  donationMessage: text("donation_message"),
  bannerImage: text("banner_image"),
  bio: text("bio"),
  image: text("image"),
  createdAt: int("created_at").notNull(),
  updatedAt: int("updated_at").notNull(),
  emailVerified: int("email_verified").default(0).notNull(),
  emailVerificationToken: text("email_verification_token"),
  emailVerificationTokenExpiry: int("email_verification_token_expiry"),
  passwordResetToken: text("password_reset_token"),
  passwordResetTokenExpiry: int("password_reset_token_expiry"),
});
