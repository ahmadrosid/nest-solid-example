import { IsString, MinLength } from "class-validator"

export class CreateUserDto {
    @IsString()
    first_name: string;
    @IsString()
    last_name: string;
    @IsString()
    username: string;
    @IsString()
    @MinLength(6)
    password: string;
}