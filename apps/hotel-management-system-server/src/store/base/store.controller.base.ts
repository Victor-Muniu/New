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
import { StoreService } from "../store.service";
import { StoreCreateInput } from "./StoreCreateInput";
import { Store } from "./Store";
import { StoreFindManyArgs } from "./StoreFindManyArgs";
import { StoreWhereUniqueInput } from "./StoreWhereUniqueInput";
import { StoreUpdateInput } from "./StoreUpdateInput";
import { InventoryFindManyArgs } from "../../inventory/base/InventoryFindManyArgs";
import { Inventory } from "../../inventory/base/Inventory";
import { InventoryWhereUniqueInput } from "../../inventory/base/InventoryWhereUniqueInput";

export class StoreControllerBase {
  constructor(protected readonly service: StoreService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Store })
  async createStore(@common.Body() data: StoreCreateInput): Promise<Store> {
    return await this.service.createStore({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        storeItemId: true,
        storeItemName: true,
        stock: true,
        price: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Store] })
  @ApiNestedQuery(StoreFindManyArgs)
  async stores(@common.Req() request: Request): Promise<Store[]> {
    const args = plainToClass(StoreFindManyArgs, request.query);
    return this.service.stores({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        storeItemId: true,
        storeItemName: true,
        stock: true,
        price: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Store })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async store(
    @common.Param() params: StoreWhereUniqueInput
  ): Promise<Store | null> {
    const result = await this.service.store({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        storeItemId: true,
        storeItemName: true,
        stock: true,
        price: true,
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
  @swagger.ApiOkResponse({ type: Store })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateStore(
    @common.Param() params: StoreWhereUniqueInput,
    @common.Body() data: StoreUpdateInput
  ): Promise<Store | null> {
    try {
      return await this.service.updateStore({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          storeItemId: true,
          storeItemName: true,
          stock: true,
          price: true,
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
  @swagger.ApiOkResponse({ type: Store })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteStore(
    @common.Param() params: StoreWhereUniqueInput
  ): Promise<Store | null> {
    try {
      return await this.service.deleteStore({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          storeItemId: true,
          storeItemName: true,
          stock: true,
          price: true,
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

  @common.Get("/:id/inventories")
  @ApiNestedQuery(InventoryFindManyArgs)
  async findInventories(
    @common.Req() request: Request,
    @common.Param() params: StoreWhereUniqueInput
  ): Promise<Inventory[]> {
    const query = plainToClass(InventoryFindManyArgs, request.query);
    const results = await this.service.findInventories(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        itemName: true,
        quantity: true,

        store: {
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

  @common.Post("/:id/inventories")
  async connectInventories(
    @common.Param() params: StoreWhereUniqueInput,
    @common.Body() body: InventoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      inventories: {
        connect: body,
      },
    };
    await this.service.updateStore({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/inventories")
  async updateInventories(
    @common.Param() params: StoreWhereUniqueInput,
    @common.Body() body: InventoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      inventories: {
        set: body,
      },
    };
    await this.service.updateStore({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/inventories")
  async disconnectInventories(
    @common.Param() params: StoreWhereUniqueInput,
    @common.Body() body: InventoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      inventories: {
        disconnect: body,
      },
    };
    await this.service.updateStore({
      where: params,
      data,
      select: { id: true },
    });
  }
}
