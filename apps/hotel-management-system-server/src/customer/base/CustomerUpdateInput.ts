/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { CheckInUpdateManyWithoutCustomersInput } from "./CheckInUpdateManyWithoutCustomersInput";
import { Type } from "class-transformer";
import { CheckOutUpdateManyWithoutCustomersInput } from "./CheckOutUpdateManyWithoutCustomersInput";
import { GuestServiceUpdateManyWithoutCustomersInput } from "./GuestServiceUpdateManyWithoutCustomersInput";
import { InvoiceUpdateManyWithoutCustomersInput } from "./InvoiceUpdateManyWithoutCustomersInput";
import { BookingUpdateManyWithoutCustomersInput } from "./BookingUpdateManyWithoutCustomersInput";

@InputType()
class CustomerUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phoneNumber?: string | null;

  @ApiProperty({
    required: false,
    type: () => CheckInUpdateManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => CheckInUpdateManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => CheckInUpdateManyWithoutCustomersInput, {
    nullable: true,
  })
  checkIns?: CheckInUpdateManyWithoutCustomersInput;

  @ApiProperty({
    required: false,
    type: () => CheckOutUpdateManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => CheckOutUpdateManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => CheckOutUpdateManyWithoutCustomersInput, {
    nullable: true,
  })
  checkOuts?: CheckOutUpdateManyWithoutCustomersInput;

  @ApiProperty({
    required: false,
    type: () => GuestServiceUpdateManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => GuestServiceUpdateManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => GuestServiceUpdateManyWithoutCustomersInput, {
    nullable: true,
  })
  guestServices?: GuestServiceUpdateManyWithoutCustomersInput;

  @ApiProperty({
    required: false,
    type: () => InvoiceUpdateManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => InvoiceUpdateManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => InvoiceUpdateManyWithoutCustomersInput, {
    nullable: true,
  })
  invoices?: InvoiceUpdateManyWithoutCustomersInput;

  @ApiProperty({
    required: false,
    type: () => BookingUpdateManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => BookingUpdateManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => BookingUpdateManyWithoutCustomersInput, {
    nullable: true,
  })
  bookings?: BookingUpdateManyWithoutCustomersInput;
}

export { CustomerUpdateInput as CustomerUpdateInput };
