/*
  Warnings:

  - A unique constraint covering the columns `[position]` on the table `projects` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "position" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "projects_position_key" ON "projects"("position");
