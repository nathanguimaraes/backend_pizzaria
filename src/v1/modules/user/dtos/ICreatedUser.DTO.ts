import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import IUser from 'src/v1/modules/user/dtos/interface/IUser.interface';

export class ICreatedUserDTO implements IUser {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Gustavo Silva',
    description: 'Name this user ',
  })
  name: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({
    example: '0000/00/00',
    description: 'Date of birth user',
  })
  birthdate: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({
    example: '0000000000',
    description: 'Number of CPF',
  })
  cpf: string;

  @IsNumber()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({
    example: '000',
    description: 'Number of Code Phone',
  })
  ddd: number;

  @IsNumber()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({
    example: '000000000',
    description: 'Number of Phone',
  })
  phone: number;
}
