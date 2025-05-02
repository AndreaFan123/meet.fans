CREATE TABLE `account` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`type` text NOT NULL,
	`username` text,
	`email` text NOT NULL,
	`hashed_password` text NOT NULL,
	`is_paid_member` integer DEFAULT false NOT NULL,
	`donation_enabled` integer DEFAULT false NOT NULL,
	`donation_message` text,
	`banner_image` text,
	`bio` text,
	`image` text,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`email_verified` integer DEFAULT false NOT NULL,
	`email_verification_token_expiry` integer,
	`password_reset_token_expiry` integer,
	`password_reset_token` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `account_username_unique` ON `account` (`username`);--> statement-breakpoint
CREATE UNIQUE INDEX `account_email_unique` ON `account` (`email`);--> statement-breakpoint
DROP TABLE `user`;