import { SortOrder } from "../../util/SortOrder";

export type MaintenanceRequestOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  requestDate?: SortOrder;
  description?: SortOrder;
  status?: SortOrder;
  roomId?: SortOrder;
};
