import { Module } from "@nestjs/common";
import { RoomStatusModuleBase } from "./base/roomStatus.module.base";
import { RoomStatusService } from "./roomStatus.service";
import { RoomStatusController } from "./roomStatus.controller";
import { RoomStatusResolver } from "./roomStatus.resolver";

@Module({
  imports: [RoomStatusModuleBase],
  controllers: [RoomStatusController],
  providers: [RoomStatusService, RoomStatusResolver],
  exports: [RoomStatusService],
})
export class RoomStatusModule {}
