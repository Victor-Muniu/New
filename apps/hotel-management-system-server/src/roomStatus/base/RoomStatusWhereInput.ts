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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, IsEnum, ValidateNested } from "class-validator";
import { EnumRoomStatusStatus } from "./EnumRoomStatusStatus";
import { RoomWhereUniqueInput } from "../../room/base/RoomWhereUniqueInput";

@InputType()
class RoomStatusWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    enum: EnumRoomStatusStatus,
  })
  @IsEnum(EnumRoomStatusStatus)
  @IsOptional()
  @Field(() => EnumRoomStatusStatus, {
    nullable: true,
  })
  status?: "Option1";

  @ApiProperty({
    required: false,
    type: () => RoomWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RoomWhereUniqueInput)
  @IsOptional()
  @Field(() => RoomWhereUniqueInput, {
    nullable: true,
  })
  room?: RoomWhereUniqueInput;
}

export { RoomStatusWhereInput as RoomStatusWhereInput };
