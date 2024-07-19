import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RoomServiceService } from "./roomService.service";
import { RoomServiceControllerBase } from "./base/roomService.controller.base";

@swagger.ApiTags("roomServices")
@common.Controller("roomServices")
export class RoomServiceController extends RoomServiceControllerBase {
  constructor(protected readonly service: RoomServiceService) {
    super(service);
  }
}
