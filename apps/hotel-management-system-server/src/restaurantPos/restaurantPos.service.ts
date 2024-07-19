import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RestaurantPosServiceBase } from "./base/restaurantPos.service.base";

@Injectable()
export class RestaurantPosService extends RestaurantPosServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
