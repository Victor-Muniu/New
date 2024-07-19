import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RoomStatusService } from "./roomStatus.service";
import { RoomStatusControllerBase } from "./base/roomStatus.controller.base";

@swagger.ApiTags("roomStatuses")
@common.Controller("roomStatuses")
export class RoomStatusController extends RoomStatusControllerBase {
  constructor(protected readonly service: RoomStatusService) {
    super(service);
  }
}
