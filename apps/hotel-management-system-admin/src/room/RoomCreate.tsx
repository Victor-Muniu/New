import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ReservationTitle } from "../reservation/ReservationTitle";
import { RoomServiceTitle } from "../roomService/RoomServiceTitle";
import { CheckInTitle } from "../checkIn/CheckInTitle";
import { CheckOutTitle } from "../checkOut/CheckOutTitle";
import { GuestServiceTitle } from "../guestService/GuestServiceTitle";
import { RoomStatusTitle } from "../roomStatus/RoomStatusTitle";
import { BookingTitle } from "../booking/BookingTitle";
import { MaintenanceRequestTitle } from "../maintenanceRequest/MaintenanceRequestTitle";

export const RoomCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="roomNumber" source="roomNumber" />
        <TextInput label="type" source="typeField" />
        <NumberInput label="pricePerNight" source="pricePerNight" />
        <BooleanInput label="availability" source="availability" />
        <ReferenceArrayInput
          source="reservations"
          reference="Reservation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReservationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="roomServices"
          reference="RoomService"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RoomServiceTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="checkIns"
          reference="CheckIn"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CheckInTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="checkOuts"
          reference="CheckOut"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CheckOutTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="guestServices"
          reference="GuestService"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GuestServiceTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="roomStatuses"
          reference="RoomStatus"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RoomStatusTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="bookings"
          reference="Booking"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BookingTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="maintenanceRequests"
          reference="MaintenanceRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MaintenanceRequestTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
