import { prisma } from "../src/client";
import bcrypt from "bcrypt";

async function main() {
  const Tushar = await prisma.user.upsert({
    where: {
      number: "8888888888",
    },
    update: {},
    create: {
      number: "8888888888",
      password: await bcrypt.hash("tushar", 10),
      name: "tushar",
      Balance: {
        create: {
          amount: 20000,
          locked: 0,
        }
      },
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Success",
          amount: 20000,
          token: "122",
          provider: "HDFC Bank",
        },
      },
    },
  });

  const Rahul = await prisma.user.upsert({
    where: {
      number: "9999999999",
    },
    update: {},
    create: {
      number: "9999999999",
      password: await bcrypt.hash("rahul", 10),
      name: "rahul",
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Failure",
          amount: 2000,
          token: "123",
          provider: "HDFC Bank",
        },
      },
    },
  });
  console.log({ Tushar, Rahul });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })

  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
