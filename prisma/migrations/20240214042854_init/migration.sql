-- CreateTable
CREATE TABLE "TodoList" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "TodoList_pkey" PRIMARY KEY ("id","title","done")
);

-- CreateIndex
CREATE UNIQUE INDEX "TodoList_id_key" ON "TodoList"("id");
