import { PrismaClient } from "@prisma/client"

// const globalForPrisma = global

const prisma = typeof global !== "undefined" ? global.prisma : new PrismaClient()

if (process.env.NODE_ENV !== "production" && typeof global !== "undefined") global.prisma = prisma

export default prisma