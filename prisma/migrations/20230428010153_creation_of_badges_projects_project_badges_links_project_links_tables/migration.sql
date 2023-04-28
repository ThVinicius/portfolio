-- CreateEnum
CREATE TYPE "ProjectType" AS ENUM ('FrontEnd', 'BackEnd', 'FullStack');

-- CreateEnum
CREATE TYPE "LinkLabel" AS ENUM ('FrontEnd Repo', 'BackEnd Repo', 'Deploy');

-- CreateTable
CREATE TABLE "badges" (
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "badges_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "projects" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "ProjectType" NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_badges" (
    "id" SERIAL NOT NULL,
    "badge_name" TEXT NOT NULL,
    "project_id" INTEGER NOT NULL,

    CONSTRAINT "project_badges_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "links" (
    "id" SERIAL NOT NULL,
    "label" "LinkLabel" NOT NULL,
    "href" TEXT NOT NULL,

    CONSTRAINT "links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_links" (
    "id" SERIAL NOT NULL,
    "link_id" INTEGER NOT NULL,
    "project_id" INTEGER NOT NULL,

    CONSTRAINT "project_links_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "project_badges" ADD CONSTRAINT "project_badges_badge_name_fkey" FOREIGN KEY ("badge_name") REFERENCES "badges"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_badges" ADD CONSTRAINT "project_badges_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_links" ADD CONSTRAINT "project_links_link_id_fkey" FOREIGN KEY ("link_id") REFERENCES "links"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_links" ADD CONSTRAINT "project_links_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
