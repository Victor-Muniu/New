import * as graphql from "@nestjs/graphql";
import { RoomStatusResolverBase } from "./base/roomStatus.resolver.base";
import { RoomStatus } from "./base/RoomStatus";
import { RoomStatusService } from "./roomStatus.service";

@graphql.Resolver(() => RoomStatus)
export class RoomStatusResolver extends RoomStatusResolverBase {
  constructor(protected readonly service: RoomStatusService) {
    super(service);
  }
}
