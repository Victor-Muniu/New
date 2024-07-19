import { RoomService as TRoomService } from "../api/roomService/RoomService";

export const ROOMSERVICE_TITLE_FIELD = "serviceType";

export const RoomServiceTitle = (record: TRoomService): string => {
  return record.serviceType?.toString() || String(record.id);
};
