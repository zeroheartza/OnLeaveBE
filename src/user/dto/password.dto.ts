import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class PasswordDto {

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly token: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly oldPassword: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly newPassword: string


  



}