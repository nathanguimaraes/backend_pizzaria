import { PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { v4 as uuidv4 } from 'uuid';

export class BasicEntity {
  @ApiProperty({
    example: 'b0a70c62-c0ba-40b3-acd9-1f39ba39fdb0',
    description: 'UUID identifier entity',
  })
  @PrimaryColumn({
    nullable: false,
    unique: true,
    type: 'varchar',
  })
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  constructor() {
    this.id = uuidv4();
  }
}
