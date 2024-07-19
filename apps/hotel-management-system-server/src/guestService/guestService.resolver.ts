import * as graphql from "@nestjs/graphql";
import { GuestServiceResolverBase } from "./base/guestService.resolver.base";
import { GuestService } from "./base/GuestService";
import { GuestServiceService } from "./guestService.service";

@graphql.Resolver(() => GuestService)
export class GuestServiceResolver extends GuestServiceResolverBase {
  constructor(protected readonly service: GuestServiceService) {
    super(service);
  }
}
