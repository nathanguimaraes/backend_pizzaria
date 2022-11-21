import { Module } from '@nestjs/common';
import Modules from './modules';
@Module({
  imports: [...Modules],
})
export class V1Module {}
