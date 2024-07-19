import { SortOrder } from "../../util/SortOrder";

export type RoomOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  roomNumber?: SortOrder;
  typeField?: SortOrder;
  pricePerNight?: SortOrder;
  availability?: SortOrder;
};
