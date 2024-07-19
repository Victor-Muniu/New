import { Module } from "@nestjs/common";
import { RoomServiceModuleBase } from "./base/roomService.module.base";
import { RoomServiceService } from "./roomService.service";
import { RoomServiceController } from "./roomService.controller";
import { RoomServiceResolver } from "./roomService.resolver";

@Module({
  imports: [RoomServiceModuleBase],
  controllers: [RoomServiceController],
  providers: [RoomServiceService, RoomServiceResolver],
  exports: [RoomServiceService],
})
export class RoomServiceModule {}
