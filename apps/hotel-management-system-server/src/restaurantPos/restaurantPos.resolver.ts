import * as graphql from "@nestjs/graphql";
import { RestaurantPosResolverBase } from "./base/restaurantPos.resolver.base";
import { RestaurantPos } from "./base/RestaurantPos";
import { RestaurantPosService } from "./restaurantPos.service";

@graphql.Resolver(() => RestaurantPos)
export class RestaurantPosResolver extends RestaurantPosResolverBase {
  constructor(protected readonly service: RestaurantPosService) {
    super(service);
  }
}
