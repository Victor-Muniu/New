import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CurioShopPosServiceBase } from "./base/curioShopPos.service.base";

@Injectable()
export class CurioShopPosService extends CurioShopPosServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
