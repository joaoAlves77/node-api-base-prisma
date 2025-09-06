import { prisma } from "../lib/prisma";

type CreateUsersProps = {
  name: string;
  email: string;
}

export const createUser = async ({name, email}: CreateUsersProps ) => {
  try {
    const user = await prisma.user.create({
      data: {name, email}
    });
    return user;
  } catch (error) {
    return false;
  }
}