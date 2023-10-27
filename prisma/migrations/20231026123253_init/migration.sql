-- CreateTable
CREATE TABLE "RootCollection" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "path" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Collection" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "path" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    CONSTRAINT "Collection_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "RootCollection" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    CONSTRAINT "User_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Collection" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
