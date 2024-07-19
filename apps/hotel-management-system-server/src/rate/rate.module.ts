import { Module } from "@nestjs/common";
import { RateModuleBase } from "./base/rate.module.base";
import { RateService } from "./rate.service";
import { RateController } from "./rate.controller";
import { RateResolver } from "./rate.resolver";

@Module({
  imports: [RateModuleBase],
  controllers: [RateController],
  providers: [RateService, RateResolver],
  exports: [RateService],
})
export class RateModule {}
