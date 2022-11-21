import {
  IsDate,
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import IUser from 'src/v1/modules/user/dtos/interface/IUser.interface';

export class IUpdatedUserDTO implements IUser {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  birthdate: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  cpf: string;

  @IsNumber()
  @IsDefined()
  @IsNotEmpty()
  ddd: number;

  @IsNumber()
  @IsDefined()
  @IsNotEmpty()
  phone: number;
}
