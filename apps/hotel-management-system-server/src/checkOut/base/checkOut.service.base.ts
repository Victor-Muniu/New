/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  CheckOut as PrismaCheckOut,
  Room as PrismaRoom,
  Customer as PrismaCustomer,
} from "@prisma/client";

export class CheckOutServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.CheckOutCountArgs, "select">): Promise<number> {
    return this.prisma.checkOut.count(args);
  }

  async checkOuts(
    args: Prisma.CheckOutFindManyArgs
  ): Promise<PrismaCheckOut[]> {
    return this.prisma.checkOut.findMany(args);
  }
  async checkOut(
    args: Prisma.CheckOutFindUniqueArgs
  ): Promise<PrismaCheckOut | null> {
    return this.prisma.checkOut.findUnique(args);
  }
  async createCheckOut(
    args: Prisma.CheckOutCreateArgs
  ): Promise<PrismaCheckOut> {
    return this.prisma.checkOut.create(args);
  }
  async updateCheckOut(
    args: Prisma.CheckOutUpdateArgs
  ): Promise<PrismaCheckOut> {
    return this.prisma.checkOut.update(args);
  }
  async deleteCheckOut(
    args: Prisma.CheckOutDeleteArgs
  ): Promise<PrismaCheckOut> {
    return this.prisma.checkOut.delete(args);
  }

  async getRoom(parentId: string): Promise<PrismaRoom | null> {
    return this.prisma.checkOut
      .findUnique({
        where: { id: parentId },
      })
      .room();
  }

  async getCustomer(parentId: string): Promise<PrismaCustomer | null> {
    return this.prisma.checkOut
      .findUnique({
        where: { id: parentId },
      })
      .customer();
  }
}
