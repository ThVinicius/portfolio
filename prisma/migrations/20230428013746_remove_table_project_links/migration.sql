/*
  Warnings:

  - You are about to drop the `project_links` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `project_id` to the `links` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "project_links" DROP CONSTRAINT "project_links_link_id_fkey";

-- DropForeignKey
ALTER TABLE "project_links" DROP CONSTRAINT "project_links_project_id_fkey";

-- AlterTable
ALTER TABLE "links" ADD COLUMN     "project_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "project_links";

-- AddForeignKey
ALTER TABLE "links" ADD CONSTRAINT "links_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
