import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CheckOutService } from "./checkOut.service";
import { CheckOutControllerBase } from "./base/checkOut.controller.base";

@swagger.ApiTags("checkOuts")
@common.Controller("checkOuts")
export class CheckOutController extends CheckOutControllerBase {
  constructor(protected readonly service: CheckOutService) {
    super(service);
  }
}
