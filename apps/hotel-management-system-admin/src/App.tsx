import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RestaurantPosList } from "./restaurantPos/RestaurantPosList";
import { RestaurantPosCreate } from "./restaurantPos/RestaurantPosCreate";
import { RestaurantPosEdit } from "./restaurantPos/RestaurantPosEdit";
import { RestaurantPosShow } from "./restaurantPos/RestaurantPosShow";
import { CurioShopPosList } from "./curioShopPos/CurioShopPosList";
import { CurioShopPosCreate } from "./curioShopPos/CurioShopPosCreate";
import { CurioShopPosEdit } from "./curioShopPos/CurioShopPosEdit";
import { CurioShopPosShow } from "./curioShopPos/CurioShopPosShow";
import { RoomServiceList } from "./roomService/RoomServiceList";
import { RoomServiceCreate } from "./roomService/RoomServiceCreate";
import { RoomServiceEdit } from "./roomService/RoomServiceEdit";
import { RoomServiceShow } from "./roomService/RoomServiceShow";
import { BarPosList } from "./barPos/BarPosList";
import { BarPosCreate } from "./barPos/BarPosCreate";
import { BarPosEdit } from "./barPos/BarPosEdit";
import { BarPosShow } from "./barPos/BarPosShow";
import { StoreList } from "./store/StoreList";
import { StoreCreate } from "./store/StoreCreate";
import { StoreEdit } from "./store/StoreEdit";
import { StoreShow } from "./store/StoreShow";
import { AccountList } from "./account/AccountList";
import { AccountCreate } from "./account/AccountCreate";
import { AccountEdit } from "./account/AccountEdit";
import { AccountShow } from "./account/AccountShow";
import { RoomList } from "./room/RoomList";
import { RoomCreate } from "./room/RoomCreate";
import { RoomEdit } from "./room/RoomEdit";
import { RoomShow } from "./room/RoomShow";
import { ReservationList } from "./reservation/ReservationList";
import { ReservationCreate } from "./reservation/ReservationCreate";
import { ReservationEdit } from "./reservation/ReservationEdit";
import { ReservationShow } from "./reservation/ReservationShow";
import { StaffList } from "./staff/StaffList";
import { StaffCreate } from "./staff/StaffCreate";
import { StaffEdit } from "./staff/StaffEdit";
import { StaffShow } from "./staff/StaffShow";
import { BookingList } from "./booking/BookingList";
import { BookingCreate } from "./booking/BookingCreate";
import { BookingEdit } from "./booking/BookingEdit";
import { BookingShow } from "./booking/BookingShow";
import { CheckInList } from "./checkIn/CheckInList";
import { CheckInCreate } from "./checkIn/CheckInCreate";
import { CheckInEdit } from "./checkIn/CheckInEdit";
import { CheckInShow } from "./checkIn/CheckInShow";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { RoomStatusList } from "./roomStatus/RoomStatusList";
import { RoomStatusCreate } from "./roomStatus/RoomStatusCreate";
import { RoomStatusEdit } from "./roomStatus/RoomStatusEdit";
import { RoomStatusShow } from "./roomStatus/RoomStatusShow";
import { CheckOutList } from "./checkOut/CheckOutList";
import { CheckOutCreate } from "./checkOut/CheckOutCreate";
import { CheckOutEdit } from "./checkOut/CheckOutEdit";
import { CheckOutShow } from "./checkOut/CheckOutShow";
import { RateList } from "./rate/RateList";
import { RateCreate } from "./rate/RateCreate";
import { RateEdit } from "./rate/RateEdit";
import { RateShow } from "./rate/RateShow";
import { MaintenanceRequestList } from "./maintenanceRequest/MaintenanceRequestList";
import { MaintenanceRequestCreate } from "./maintenanceRequest/MaintenanceRequestCreate";
import { MaintenanceRequestEdit } from "./maintenanceRequest/MaintenanceRequestEdit";
import { MaintenanceRequestShow } from "./maintenanceRequest/MaintenanceRequestShow";
import { InvoiceList } from "./invoice/InvoiceList";
import { InvoiceCreate } from "./invoice/InvoiceCreate";
import { InvoiceEdit } from "./invoice/InvoiceEdit";
import { InvoiceShow } from "./invoice/InvoiceShow";
import { GuestServiceList } from "./guestService/GuestServiceList";
import { GuestServiceCreate } from "./guestService/GuestServiceCreate";
import { GuestServiceEdit } from "./guestService/GuestServiceEdit";
import { GuestServiceShow } from "./guestService/GuestServiceShow";
import { InventoryList } from "./inventory/InventoryList";
import { InventoryCreate } from "./inventory/InventoryCreate";
import { InventoryEdit } from "./inventory/InventoryEdit";
import { InventoryShow } from "./inventory/InventoryShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"HotelManagementSystem"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="RestaurantPos"
          list={RestaurantPosList}
          edit={RestaurantPosEdit}
          create={RestaurantPosCreate}
          show={RestaurantPosShow}
        />
        <Resource
          name="CurioShopPos"
          list={CurioShopPosList}
          edit={CurioShopPosEdit}
          create={CurioShopPosCreate}
          show={CurioShopPosShow}
        />
        <Resource
          name="RoomService"
          list={RoomServiceList}
          edit={RoomServiceEdit}
          create={RoomServiceCreate}
          show={RoomServiceShow}
        />
        <Resource
          name="BarPos"
          list={BarPosList}
          edit={BarPosEdit}
          create={BarPosCreate}
          show={BarPosShow}
        />
        <Resource
          name="Store"
          list={StoreList}
          edit={StoreEdit}
          create={StoreCreate}
          show={StoreShow}
        />
        <Resource
          name="Account"
          list={AccountList}
          edit={AccountEdit}
          create={AccountCreate}
          show={AccountShow}
        />
        <Resource
          name="Room"
          list={RoomList}
          edit={RoomEdit}
          create={RoomCreate}
          show={RoomShow}
        />
        <Resource
          name="Reservation"
          list={ReservationList}
          edit={ReservationEdit}
          create={ReservationCreate}
          show={ReservationShow}
        />
        <Resource
          name="Staff"
          list={StaffList}
          edit={StaffEdit}
          create={StaffCreate}
          show={StaffShow}
        />
        <Resource
          name="Booking"
          list={BookingList}
          edit={BookingEdit}
          create={BookingCreate}
          show={BookingShow}
        />
        <Resource
          name="CheckIn"
          list={CheckInList}
          edit={CheckInEdit}
          create={CheckInCreate}
          show={CheckInShow}
        />
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
        <Resource
          name="RoomStatus"
          list={RoomStatusList}
          edit={RoomStatusEdit}
          create={RoomStatusCreate}
          show={RoomStatusShow}
        />
        <Resource
          name="CheckOut"
          list={CheckOutList}
          edit={CheckOutEdit}
          create={CheckOutCreate}
          show={CheckOutShow}
        />
        <Resource
          name="Rate"
          list={RateList}
          edit={RateEdit}
          create={RateCreate}
          show={RateShow}
        />
        <Resource
          name="MaintenanceRequest"
          list={MaintenanceRequestList}
          edit={MaintenanceRequestEdit}
          create={MaintenanceRequestCreate}
          show={MaintenanceRequestShow}
        />
        <Resource
          name="Invoice"
          list={InvoiceList}
          edit={InvoiceEdit}
          create={InvoiceCreate}
          show={InvoiceShow}
        />
        <Resource
          name="GuestService"
          list={GuestServiceList}
          edit={GuestServiceEdit}
          create={GuestServiceCreate}
          show={GuestServiceShow}
        />
        <Resource
          name="Inventory"
          list={InventoryList}
          edit={InventoryEdit}
          create={InventoryCreate}
          show={InventoryShow}
        />
      </Admin>
    </div>
  );
};

export default App;
