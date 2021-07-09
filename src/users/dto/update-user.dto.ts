import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto";
import { MinLength } from "class-validator"

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @MinLength(0)
    password: string;
}