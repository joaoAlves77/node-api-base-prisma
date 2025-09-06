import { prisma } from "../lib/prisma";

type CreateUsersProps = {
  name: string;
  email: string;
}

export const createUser = async ({name, email}: CreateUsersProps ) => {
  const user = await prisma.user.create({
    data: {name, email}
  });
  return user;
}