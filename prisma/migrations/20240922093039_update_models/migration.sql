/*
  Warnings:

  - You are about to drop the column `restaurantSlug` on the `MenuItem` table. All the data in the column will be lost.
  - Added the required column `restaurantId` to the `MenuItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MenuItem" DROP CONSTRAINT "MenuItem_restaurantSlug_fkey";

-- AlterTable
ALTER TABLE "MenuItem" DROP COLUMN "restaurantSlug",
ADD COLUMN     "restaurantId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "MenuItem" ADD CONSTRAINT "MenuItem_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
