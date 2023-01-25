const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
async function main() {
    const allUser = await prisma.user.findMany(
        {
            where: { id: 2 }
        }
    );
    console.log(allUser)
}
main();