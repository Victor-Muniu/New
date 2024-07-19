import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RoomServiceServiceBase } from "./base/roomService.service.base";

@Injectable()
export class RoomServiceService extends RoomServiceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
