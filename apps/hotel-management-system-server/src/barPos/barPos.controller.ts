import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BarPosService } from "./barPos.service";
import { BarPosControllerBase } from "./base/barPos.controller.base";

@swagger.ApiTags("barPos")
@common.Controller("barPos")
export class BarPosController extends BarPosControllerBase {
  constructor(protected readonly service: BarPosService) {
    super(service);
  }
}
