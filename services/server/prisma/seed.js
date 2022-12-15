import Prisma from '@prisma/client';
const { PrismaClient } = Prisma;

const prisma = new PrismaClient();

const initialItems = [
  {
    title: 'Item N1',
  },
  {
    title: 'Item N2',
  },
  {
    title: 'Item N3',
  },
];

async function main() {
  try {
    // if Item table is empty
    if (!(await (await prisma.item.findMany()).length)) {
      await prisma.item.createMany({ data: initialItems });
    }
    console.log('Database has been successfully seeded 🚀 ');
  } catch (e) {
    console.log(e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
