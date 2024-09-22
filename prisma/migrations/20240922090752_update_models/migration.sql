/*
  Warnings:

  - You are about to drop the column `restaurantId` on the `MenuItem` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slug]` on the table `Restaurant` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `restaurantSlug` to the `MenuItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Restaurant` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MenuItem" DROP CONSTRAINT "MenuItem_restaurantId_fkey";

-- AlterTable
ALTER TABLE "MenuItem" DROP COLUMN "restaurantId",
ADD COLUMN     "restaurantSlug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Restaurant" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Restaurant_slug_key" ON "Restaurant"("slug");

-- AddForeignKey
ALTER TABLE "MenuItem" ADD CONSTRAINT "MenuItem_restaurantSlug_fkey" FOREIGN KEY ("restaurantSlug") REFERENCES "Restaurant"("slug") ON DELETE CASCADE ON UPDATE CASCADE;
