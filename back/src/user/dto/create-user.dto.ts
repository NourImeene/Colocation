import { Type } from "class-transformer"
import { IsNumber, IsString, IsStrongPasswordOptions } from "class-validator"

export class CreateUserDto {
    @IsString()
    readonly name:string
    @IsString()
    readonly email:string
    @IsString()
    readonly password:string
    @IsNumber()
    @Type(() => Number)
    readonly phone:number
    @IsString()
    readonly ville:string
    refreshToken: string;

}
