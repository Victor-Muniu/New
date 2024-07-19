import { Module } from "@nestjs/common";
import { CheckOutModuleBase } from "./base/checkOut.module.base";
import { CheckOutService } from "./checkOut.service";
import { CheckOutController } from "./checkOut.controller";
import { CheckOutResolver } from "./checkOut.resolver";

@Module({
  imports: [CheckOutModuleBase],
  controllers: [CheckOutController],
  providers: [CheckOutService, CheckOutResolver],
  exports: [CheckOutService],
})
export class CheckOutModule {}
