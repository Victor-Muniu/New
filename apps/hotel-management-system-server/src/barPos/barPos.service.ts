import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BarPosServiceBase } from "./base/barPos.service.base";

@Injectable()
export class BarPosService extends BarPosServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
