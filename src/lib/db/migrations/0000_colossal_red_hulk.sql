CREATE TABLE `user` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`username` text,
	`email` text NOT NULL,
	`password` text NOT NULL,
	`is_paid_member` integer DEFAULT 0 NOT NULL,
	`donation_enabled` integer DEFAULT 0 NOT NULL,
	`donation_message` text,
	`banner_image` text,
	`bio` text,
	`image` text,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`email_verified` integer DEFAULT 0 NOT NULL,
	`email_verification_token` text,
	`email_verification_token_expiry` integer,
	`password_reset_token` text,
	`password_reset_token_expiry` integer
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_username_unique` ON `user` (`username`);--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);