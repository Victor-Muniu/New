import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CheckOutServiceBase } from "./base/checkOut.service.base";

@Injectable()
export class CheckOutService extends CheckOutServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
