import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GuestServiceServiceBase } from "./base/guestService.service.base";

@Injectable()
export class GuestServiceService extends GuestServiceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
