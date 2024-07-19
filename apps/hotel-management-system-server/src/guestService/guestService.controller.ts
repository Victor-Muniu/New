import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GuestServiceService } from "./guestService.service";
import { GuestServiceControllerBase } from "./base/guestService.controller.base";

@swagger.ApiTags("guestServices")
@common.Controller("guestServices")
export class GuestServiceController extends GuestServiceControllerBase {
  constructor(protected readonly service: GuestServiceService) {
    super(service);
  }
}
