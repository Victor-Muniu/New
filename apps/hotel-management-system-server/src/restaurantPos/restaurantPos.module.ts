import { Module } from "@nestjs/common";
import { RestaurantPosModuleBase } from "./base/restaurantPos.module.base";
import { RestaurantPosService } from "./restaurantPos.service";
import { RestaurantPosController } from "./restaurantPos.controller";
import { RestaurantPosResolver } from "./restaurantPos.resolver";

@Module({
  imports: [RestaurantPosModuleBase],
  controllers: [RestaurantPosController],
  providers: [RestaurantPosService, RestaurantPosResolver],
  exports: [RestaurantPosService],
})
export class RestaurantPosModule {}
