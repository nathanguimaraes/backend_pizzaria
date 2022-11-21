import { ApiProperty } from '@nestjs/swagger';
import { BasicEntity } from 'src/v1/modules/BasicEntity';
import { Column, Entity } from 'typeorm';
import IUser from '../../dtos/interface/IUser.interface';

@Entity('tb_client')
export class EntityClient extends BasicEntity implements IUser {
  constructor(data?: Partial<EntityClient>) {
    super();
    Object.assign(this, data);
  }

  @ApiProperty({
    example: 'Gustavo Silva',
    description: 'Name this user ',
  })
  @Column({
    type: 'varchar',
    unique: false,
    nullable: false,
  })
  name: string;

  @ApiProperty({
    example: '0000/00/00',
    description: 'Date of birth user',
  })
  @Column({
    type: 'varchar',
    unique: false,
    nullable: false,
  })
  birthdate: string;

  @ApiProperty({
    example: '0000000000',
    description: 'Number of CPF',
  })
  @Column({
    type: 'varchar',
    unique: true,
    nullable: false,
  })
  cpf: string;

  @ApiProperty({
    example: '000',
    description: 'Number of Code Phone',
  })
  @Column({
    type: 'integer',
    nullable: false,
    unique: false,
  })
  ddd: number;

  @ApiProperty({
    example: '000000000',
    description: 'Number of Phone',
  })
  @Column({
    type: 'integer',
    nullable: false,
    unique: true,
  })
  phone: number;
}
