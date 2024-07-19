import * as graphql from "@nestjs/graphql";
import { CheckInResolverBase } from "./base/checkIn.resolver.base";
import { CheckIn } from "./base/CheckIn";
import { CheckInService } from "./checkIn.service";

@graphql.Resolver(() => CheckIn)
export class CheckInResolver extends CheckInResolverBase {
  constructor(protected readonly service: CheckInService) {
    super(service);
  }
}
