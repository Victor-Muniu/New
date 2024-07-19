import * as graphql from "@nestjs/graphql";
import { RoomServiceResolverBase } from "./base/roomService.resolver.base";
import { RoomService } from "./base/RoomService";
import { RoomServiceService } from "./roomService.service";

@graphql.Resolver(() => RoomService)
export class RoomServiceResolver extends RoomServiceResolverBase {
  constructor(protected readonly service: RoomServiceService) {
    super(service);
  }
}
