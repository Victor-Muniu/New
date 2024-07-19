import { Module } from "@nestjs/common";
import { BarPosModuleBase } from "./base/barPos.module.base";
import { BarPosService } from "./barPos.service";
import { BarPosController } from "./barPos.controller";
import { BarPosResolver } from "./barPos.resolver";

@Module({
  imports: [BarPosModuleBase],
  controllers: [BarPosController],
  providers: [BarPosService, BarPosResolver],
  exports: [BarPosService],
})
export class BarPosModule {}
