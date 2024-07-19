/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, BarPos as PrismaBarPos } from "@prisma/client";

export class BarPosServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.BarPosCountArgs, "select">): Promise<number> {
    return this.prisma.barPos.count(args);
  }

  async barPosItems(args: Prisma.BarPosFindManyArgs): Promise<PrismaBarPos[]> {
    return this.prisma.barPos.findMany(args);
  }
  async barPos(
    args: Prisma.BarPosFindUniqueArgs
  ): Promise<PrismaBarPos | null> {
    return this.prisma.barPos.findUnique(args);
  }
  async createBarPos(args: Prisma.BarPosCreateArgs): Promise<PrismaBarPos> {
    return this.prisma.barPos.create(args);
  }
  async updateBarPos(args: Prisma.BarPosUpdateArgs): Promise<PrismaBarPos> {
    return this.prisma.barPos.update(args);
  }
  async deleteBarPos(args: Prisma.BarPosDeleteArgs): Promise<PrismaBarPos> {
    return this.prisma.barPos.delete(args);
  }
}
