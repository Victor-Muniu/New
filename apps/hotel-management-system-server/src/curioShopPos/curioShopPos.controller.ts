import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CurioShopPosService } from "./curioShopPos.service";
import { CurioShopPosControllerBase } from "./base/curioShopPos.controller.base";

@swagger.ApiTags("curioShopPos")
@common.Controller("curioShopPos")
export class CurioShopPosController extends CurioShopPosControllerBase {
  constructor(protected readonly service: CurioShopPosService) {
    super(service);
  }
}
