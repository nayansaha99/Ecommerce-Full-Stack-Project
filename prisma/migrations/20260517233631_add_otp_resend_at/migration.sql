/*
  Warnings:

  - You are about to drop the column `otp_resend_at` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `otp_resend_at`,
    ADD COLUMN `otpResendAt` DATETIME(3) NULL;
