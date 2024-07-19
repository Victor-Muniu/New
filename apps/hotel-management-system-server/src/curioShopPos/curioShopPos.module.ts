import { Module } from "@nestjs/common";
import { CurioShopPosModuleBase } from "./base/curioShopPos.module.base";
import { CurioShopPosService } from "./curioShopPos.service";
import { CurioShopPosController } from "./curioShopPos.controller";
import { CurioShopPosResolver } from "./curioShopPos.resolver";

@Module({
  imports: [CurioShopPosModuleBase],
  controllers: [CurioShopPosController],
  providers: [CurioShopPosService, CurioShopPosResolver],
  exports: [CurioShopPosService],
})
export class CurioShopPosModule {}
