import prisma from "@/utils/prisma"

export const getMedia = async id => await prisma.media.findUnique({
  where: {
      id
  },
  include: {
      owner: {
          include: {
              owner: {
                  include: {
                      owner: {
                          include: {
                              owner: true
                          }
                      }
                  }
              }
          }
      }
  }
})