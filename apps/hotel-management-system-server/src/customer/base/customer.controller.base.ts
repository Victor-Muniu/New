/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CustomerService } from "../customer.service";
import { CustomerCreateInput } from "./CustomerCreateInput";
import { Customer } from "./Customer";
import { CustomerFindManyArgs } from "./CustomerFindManyArgs";
import { CustomerWhereUniqueInput } from "./CustomerWhereUniqueInput";
import { CustomerUpdateInput } from "./CustomerUpdateInput";
import { CheckInFindManyArgs } from "../../checkIn/base/CheckInFindManyArgs";
import { CheckIn } from "../../checkIn/base/CheckIn";
import { CheckInWhereUniqueInput } from "../../checkIn/base/CheckInWhereUniqueInput";
import { CheckOutFindManyArgs } from "../../checkOut/base/CheckOutFindManyArgs";
import { CheckOut } from "../../checkOut/base/CheckOut";
import { CheckOutWhereUniqueInput } from "../../checkOut/base/CheckOutWhereUniqueInput";
import { GuestServiceFindManyArgs } from "../../guestService/base/GuestServiceFindManyArgs";
import { GuestService } from "../../guestService/base/GuestService";
import { GuestServiceWhereUniqueInput } from "../../guestService/base/GuestServiceWhereUniqueInput";
import { InvoiceFindManyArgs } from "../../invoice/base/InvoiceFindManyArgs";
import { Invoice } from "../../invoice/base/Invoice";
import { InvoiceWhereUniqueInput } from "../../invoice/base/InvoiceWhereUniqueInput";
import { BookingFindManyArgs } from "../../booking/base/BookingFindManyArgs";
import { Booking } from "../../booking/base/Booking";
import { BookingWhereUniqueInput } from "../../booking/base/BookingWhereUniqueInput";

export class CustomerControllerBase {
  constructor(protected readonly service: CustomerService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Customer })
  async createCustomer(
    @common.Body() data: CustomerCreateInput
  ): Promise<Customer> {
    return await this.service.createCustomer({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        firstName: true,
        lastName: true,
        email: true,
        phoneNumber: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Customer] })
  @ApiNestedQuery(CustomerFindManyArgs)
  async customers(@common.Req() request: Request): Promise<Customer[]> {
    const args = plainToClass(CustomerFindManyArgs, request.query);
    return this.service.customers({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        firstName: true,
        lastName: true,
        email: true,
        phoneNumber: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Customer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async customer(
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<Customer | null> {
    const result = await this.service.customer({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        firstName: true,
        lastName: true,
        email: true,
        phoneNumber: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Customer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCustomer(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() data: CustomerUpdateInput
  ): Promise<Customer | null> {
    try {
      return await this.service.updateCustomer({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          firstName: true,
          lastName: true,
          email: true,
          phoneNumber: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Customer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCustomer(
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<Customer | null> {
    try {
      return await this.service.deleteCustomer({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          firstName: true,
          lastName: true,
          email: true,
          phoneNumber: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/checkIns")
  @ApiNestedQuery(CheckInFindManyArgs)
  async findCheckIns(
    @common.Req() request: Request,
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<CheckIn[]> {
    const query = plainToClass(CheckInFindManyArgs, request.query);
    const results = await this.service.findCheckIns(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        checkInDate: true,

        room: {
          select: {
            id: true,
          },
        },

        customer: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/checkIns")
  async connectCheckIns(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: CheckInWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      checkIns: {
        connect: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/checkIns")
  async updateCheckIns(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: CheckInWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      checkIns: {
        set: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/checkIns")
  async disconnectCheckIns(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: CheckInWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      checkIns: {
        disconnect: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/checkOuts")
  @ApiNestedQuery(CheckOutFindManyArgs)
  async findCheckOuts(
    @common.Req() request: Request,
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<CheckOut[]> {
    const query = plainToClass(CheckOutFindManyArgs, request.query);
    const results = await this.service.findCheckOuts(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        checkOutDate: true,

        room: {
          select: {
            id: true,
          },
        },

        customer: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/checkOuts")
  async connectCheckOuts(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: CheckOutWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      checkOuts: {
        connect: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/checkOuts")
  async updateCheckOuts(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: CheckOutWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      checkOuts: {
        set: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/checkOuts")
  async disconnectCheckOuts(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: CheckOutWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      checkOuts: {
        disconnect: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/guestServices")
  @ApiNestedQuery(GuestServiceFindManyArgs)
  async findGuestServices(
    @common.Req() request: Request,
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<GuestService[]> {
    const query = plainToClass(GuestServiceFindManyArgs, request.query);
    const results = await this.service.findGuestServices(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        serviceType: true,
        serviceDate: true,

        room: {
          select: {
            id: true,
          },
        },

        customer: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/guestServices")
  async connectGuestServices(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: GuestServiceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      guestServices: {
        connect: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/guestServices")
  async updateGuestServices(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: GuestServiceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      guestServices: {
        set: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/guestServices")
  async disconnectGuestServices(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: GuestServiceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      guestServices: {
        disconnect: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/invoices")
  @ApiNestedQuery(InvoiceFindManyArgs)
  async findInvoices(
    @common.Req() request: Request,
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<Invoice[]> {
    const query = plainToClass(InvoiceFindManyArgs, request.query);
    const results = await this.service.findInvoices(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        invoiceDate: true,
        totalAmount: true,
        details: true,

        customer: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/invoices")
  async connectInvoices(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: InvoiceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      invoices: {
        connect: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/invoices")
  async updateInvoices(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: InvoiceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      invoices: {
        set: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/invoices")
  async disconnectInvoices(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: InvoiceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      invoices: {
        disconnect: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/bookings")
  @ApiNestedQuery(BookingFindManyArgs)
  async findBookings(
    @common.Req() request: Request,
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<Booking[]> {
    const query = plainToClass(BookingFindManyArgs, request.query);
    const results = await this.service.findBookings(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        status: true,
        bookingDate: true,

        room: {
          select: {
            id: true,
          },
        },

        customer: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/bookings")
  async connectBookings(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: BookingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bookings: {
        connect: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/bookings")
  async updateBookings(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: BookingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bookings: {
        set: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/bookings")
  async disconnectBookings(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: BookingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bookings: {
        disconnect: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }
}
