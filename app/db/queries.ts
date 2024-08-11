import { eq } from "drizzle-orm";
import { db } from "./db";
import { InsertPost, postsTable } from "./schema";

type post = {
  id: number;
  title: string;
  slug: string;
  content: string;
  description: string;
  thumbnail: string;
  updatedAt: Date;
};

export async function getPosts(): Promise<Array<post>> {
  return db.select().from(postsTable);
}

export async function insertPost(data: InsertPost): Promise<void> {
  await db.insert(postsTable).values(data);
}

export async function fetchPost(slug: string): Promise<Array<post>> {
  return db.select().from(postsTable).where(eq(postsTable.slug, slug));
}
