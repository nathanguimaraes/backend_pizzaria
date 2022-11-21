import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ICreatedUserDTO } from 'src/v1/modules/user/dtos/ICreatedUser.DTO';
import { IUpdatedUserDTO } from 'src/v1/modules/user/dtos/IUpdatedUser.DTO';
import { ServiceClient } from 'src/v1/modules/user/services/user.service';
import { EntityClient } from 'src/v1/modules/user/typeorm/entities/User.entity';

@ApiTags('User')
@UseInterceptors(ClassSerializerInterceptor)
@Controller('v1/user') // Router for teste
export class ControllerUser {
  constructor(private readonly serviceClient: ServiceClient) {}

  @ApiOperation({ summary: 'Router for create user' }) // Description in router
  @ApiCreatedResponse({
    // Data send in response to create user
    description: 'Create new user',
    type: EntityClient,
  })
  @ApiBody({
    type: ICreatedUserDTO, // Data send in request
  })
  @UsePipes(new ValidationPipe())
  @Post('/create')
  public createClient(@Body() data: ICreatedUserDTO): Promise<EntityClient> {
    return this.serviceClient.createUser(data);
  }

  @ApiOperation({ summary: 'Router for create user' })
  @ApiCreatedResponse({
    description: 'Update user',
    type: EntityClient,
  })
  @ApiBody({
    type: IUpdatedUserDTO,
  })
  @UsePipes(new ValidationPipe())
  @Put('/update')
  public updateClient(@Body() data: IUpdatedUserDTO): Promise<EntityClient> {
    return this.serviceClient.updateUser(data);
  }

  @ApiOperation({ summary: 'Router for create user ' })
  @ApiCreatedResponse({
    description: 'Delete user',
    type: EntityClient,
  })
  @UsePipes(new ValidationPipe()) //pipes of validation
  @Delete('/delete')
  public async removeClient(@Query(':id') id: string): Promise<void> {
    await this.serviceClient.deleteUser(id);
  }

  @ApiOperation({ summary: 'Find all users' })
  @UsePipes(new ValidationPipe())
  @Get('/all')
  public findByAll(): Promise<EntityClient[]> {
    return this.serviceClient.findByAll();
  }

  @ApiOperation({
    summary: 'Find one user',
  })
  @UsePipes(new ValidationPipe())
  @Get('/name/')
  public findByName(@Query('name') name: string): Promise<EntityClient> {
    return this.serviceClient.findByName(name);
  }

  @ApiOperation({
    summary: 'Find one user by id',
  })
  @UsePipes(new ValidationPipe())
  @Get('/id/')
  public findById(@Query('id') id: string): Promise<EntityClient> {
    return this.serviceClient.findById(id);
  }

  @ApiOperation({
    summary: 'Find one user by cpf',
  })
  @UsePipes(new ValidationPipe())
  @Get('/cpf/')
  public findByCpf(@Query('cpf') cpf: string): Promise<EntityClient> {
    return this.serviceClient.findByCpf(cpf);
  }
}
