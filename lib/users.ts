import { User } from "@prisma/client";
import prismadb from "@/lib/prismadb";

export async function createUser(data: User) {
  try {
    const user = await prismadb.user.create({ data });
    return { user };
  } catch (error) {
    return { error };
  }
}

export async function getUserById({
  id,
  clerkUserId,
}: {
  id?: string;
  clerkUserId?: string;
}) {
  try {
    if (!id && !clerkUserId) {
      throw new Error("Id or ClerkId is required");
    }
    const query = id ? { id } : { clerkUserId };
    const user = await prismadb.user.findUnique({ where: query });
    return { user };
  } catch (error) {
    return { error };
  }
}

export async function UpdateUser(id: string, data: Partial<User>) {
  try {
    const user = await prismadb.user.update({
      where: { id },
      data,
    });
    return { user };
  } catch (error) {
    return { error };
  }
}
