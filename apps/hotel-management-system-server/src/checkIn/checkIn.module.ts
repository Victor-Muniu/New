import { Module } from "@nestjs/common";
import { CheckInModuleBase } from "./base/checkIn.module.base";
import { CheckInService } from "./checkIn.service";
import { CheckInController } from "./checkIn.controller";
import { CheckInResolver } from "./checkIn.resolver";

@Module({
  imports: [CheckInModuleBase],
  controllers: [CheckInController],
  providers: [CheckInService, CheckInResolver],
  exports: [CheckInService],
})
export class CheckInModule {}
