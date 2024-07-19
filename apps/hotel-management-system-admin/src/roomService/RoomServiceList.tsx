import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ROOM_TITLE_FIELD } from "../room/RoomTitle";

export const RoomServiceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RoomServices"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="serviceType" source="serviceType" />
        <TextField label="price" source="price" />
        <ReferenceField label="room" source="room.id" reference="Room">
          <TextField source={ROOM_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
