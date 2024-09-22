/*
  Warnings:

  - You are about to drop the column `slug` on the `Restaurant` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Restaurant" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "customerRating" TEXT,
    "michellinRating" TEXT
);
INSERT INTO "new_Restaurant" ("customerRating", "id", "michellinRating", "name") SELECT "customerRating", "id", "michellinRating", "name" FROM "Restaurant";
DROP TABLE "Restaurant";
ALTER TABLE "new_Restaurant" RENAME TO "Restaurant";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
