import { Room as TRoom } from "../api/room/Room";

export const ROOM_TITLE_FIELD = "typeField";

export const RoomTitle = (record: TRoom): string => {
  return record.typeField?.toString() || String(record.id);
};
