import * as graphql from "@nestjs/graphql";
import { BarPosResolverBase } from "./base/barPos.resolver.base";
import { BarPos } from "./base/BarPos";
import { BarPosService } from "./barPos.service";

@graphql.Resolver(() => BarPos)
export class BarPosResolver extends BarPosResolverBase {
  constructor(protected readonly service: BarPosService) {
    super(service);
  }
}
