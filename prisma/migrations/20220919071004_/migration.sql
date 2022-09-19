-- CreateTable
CREATE TABLE "Example" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Example_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Note" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT DEFAULT 'Untitled Note',
    "content" TEXT,
    "color" TEXT NOT NULL DEFAULT 'white',

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);
