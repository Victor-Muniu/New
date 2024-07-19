import * as graphql from "@nestjs/graphql";
import { RateResolverBase } from "./base/rate.resolver.base";
import { Rate } from "./base/Rate";
import { RateService } from "./rate.service";

@graphql.Resolver(() => Rate)
export class RateResolver extends RateResolverBase {
  constructor(protected readonly service: RateService) {
    super(service);
  }
}
