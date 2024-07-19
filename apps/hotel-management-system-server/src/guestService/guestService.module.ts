import { Module } from "@nestjs/common";
import { GuestServiceModuleBase } from "./base/guestService.module.base";
import { GuestServiceService } from "./guestService.service";
import { GuestServiceController } from "./guestService.controller";
import { GuestServiceResolver } from "./guestService.resolver";

@Module({
  imports: [GuestServiceModuleBase],
  controllers: [GuestServiceController],
  providers: [GuestServiceService, GuestServiceResolver],
  exports: [GuestServiceService],
})
export class GuestServiceModule {}
