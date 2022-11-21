import { Module } from '@nestjs/common';
import Controllers from 'src/v1/modules/user/controller';
import { ControllerUser } from 'src/v1/modules/user/controller/User.controller';
import { ServiceClient } from 'src/v1/modules/user/services/user.service';
import typeorm from 'src/v1/modules/user/typeorm';

@Module({
  imports: [typeorm],
  providers: [ServiceClient],
  controllers: [...Controllers],
})
export class ModuleUser {}
