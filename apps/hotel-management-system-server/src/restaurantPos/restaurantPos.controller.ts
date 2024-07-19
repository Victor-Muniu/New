import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RestaurantPosService } from "./restaurantPos.service";
import { RestaurantPosControllerBase } from "./base/restaurantPos.controller.base";

@swagger.ApiTags("restaurantPos")
@common.Controller("restaurantPos")
export class RestaurantPosController extends RestaurantPosControllerBase {
  constructor(protected readonly service: RestaurantPosService) {
    super(service);
  }
}
