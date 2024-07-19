import * as graphql from "@nestjs/graphql";
import { CurioShopPosResolverBase } from "./base/curioShopPos.resolver.base";
import { CurioShopPos } from "./base/CurioShopPos";
import { CurioShopPosService } from "./curioShopPos.service";

@graphql.Resolver(() => CurioShopPos)
export class CurioShopPosResolver extends CurioShopPosResolverBase {
  constructor(protected readonly service: CurioShopPosService) {
    super(service);
  }
}
