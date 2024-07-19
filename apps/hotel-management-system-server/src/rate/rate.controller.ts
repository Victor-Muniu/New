import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RateService } from "./rate.service";
import { RateControllerBase } from "./base/rate.controller.base";

@swagger.ApiTags("rates")
@common.Controller("rates")
export class RateController extends RateControllerBase {
  constructor(protected readonly service: RateService) {
    super(service);
  }
}
