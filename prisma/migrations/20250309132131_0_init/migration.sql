-- CreateTable
CREATE TABLE "Chat" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "messages" JSONB[] DEFAULT ARRAY[]::JSONB[],

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("id")
);
