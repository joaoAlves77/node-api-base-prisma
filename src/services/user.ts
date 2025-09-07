import { Prisma } from "../generated/prisma";
import { prisma } from "../lib/prisma";

export const createUser = async (data: Prisma.UserCreateInput ) => {
  const result = await prisma.user.upsert({
    where: { email: data.email },
    update: {
      role: "ADMIN"
    },
    create: data
  });

  return result;
}

export const createUsers = async (users: Prisma.UserCreateInput[]) => {
  try {
    return await prisma.user.createMany({
      data: users,
      skipDuplicates: true
    });
  } catch (error) {
    return false;
  }
}

export const getAllUsers = async () => {
  let page = 2;

  let perPage = 4;
  const users = await prisma.user.findMany({
    skip: (page - 1) * perPage,
    take: perPage
  });
  return users;
}

export const getUserByEmail = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      name: true
    }
  });
  return user;
}

export const updateUser = async () => {
  const updateUser = await prisma.user.update({
    where: {
      email: "teste2@email.com"
    },
    data: {
      role: "ADMIN"
    }
  });

  return updateUser;
}