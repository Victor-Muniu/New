import * as graphql from "@nestjs/graphql";
import { CheckOutResolverBase } from "./base/checkOut.resolver.base";
import { CheckOut } from "./base/CheckOut";
import { CheckOutService } from "./checkOut.service";

@graphql.Resolver(() => CheckOut)
export class CheckOutResolver extends CheckOutResolverBase {
  constructor(protected readonly service: CheckOutService) {
    super(service);
  }
}
