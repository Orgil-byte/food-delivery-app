/*
  Warnings:

  - You are about to drop the column `title` on the `Food` table. All the data in the column will be lost.
  - Added the required column `foodCategoryId` to the `Food` table without a default value. This is not possible if the table is not empty.
  - Added the required column `foodName` to the `Food` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Food` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ingredients` to the `Food` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Food` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Food` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Food" DROP COLUMN "title",
ADD COLUMN     "foodName" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "ingredients" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
