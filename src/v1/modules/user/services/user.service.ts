import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICreatedUserDTO } from 'src/v1/modules/user/dtos/ICreatedUser.DTO';
import { IUpdatedUserDTO } from 'src/v1/modules/user/dtos/IUpdatedUser.DTO';
import IRepositoryUser from 'src/v1/modules/user/repositories/User.repository';
import { EntityClient } from 'src/v1/modules/user/typeorm/entities/User.entity';
import { RepositoryUser } from 'src/v1/modules/user/typeorm/repositories/User.repository';
import * as userCrud from 'src/v1/modules/user/services/CRUD'; //import objects

@Injectable()
export class ServiceClient {
  constructor(
    @InjectRepository(RepositoryUser)
    private readonly repositoryCliente: IRepositoryUser,
  ) {}

  async createUser(data: ICreatedUserDTO): Promise<EntityClient> {
    return userCrud.create({
      //using function
      repository: this.repositoryCliente,
      data,
    });
  }

  async updateUser(data: IUpdatedUserDTO): Promise<EntityClient> {
    return this.repositoryCliente.updateClient(data);
  }

  async deleteUser(id: string): Promise<void> {
    userCrud.deleteUser({
      data: id,
      repository: this.repositoryCliente,
    });
  }

  async findByAll(): Promise<EntityClient[]> {
    return this.repositoryCliente.findAll();
  }

  async findById(id: string): Promise<EntityClient> {
    return this.repositoryCliente.findById(id);
  }

  async findByName(name: string): Promise<EntityClient> {
    return this.repositoryCliente.findByName(name);
  }

  async findByCpf(cpf: string): Promise<EntityClient> {
    return this.repositoryCliente.findByCpf(cpf);
  }
}
