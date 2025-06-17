-- CreateTable
CREATE TABLE "tasks" (
    "id" TEXT NOT NULL,
    "task_title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "is_completed" TEXT NOT NULL,
    "Isdeleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);
