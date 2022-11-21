import { ICreatedUserDTO } from 'src/v1/modules/user/dtos/ICreatedUser.DTO';
import { IUpdatedUserDTO } from 'src/v1/modules/user/dtos/IUpdatedUser.DTO';
import { EntityClient } from 'src/v1/modules/user/typeorm/entities/User.entity';

export default interface IRepositoryUser {
  createUser(data: ICreatedUserDTO): Promise<EntityClient>;
  updateClient(data: IUpdatedUserDTO): Promise<EntityClient>;
  removeClient(id: string): Promise<void>;

  findAll(): Promise<EntityClient[]>;
  findById(id: string): Promise<EntityClient>;
  findByName(name: string): Promise<EntityClient>;
  findByCpf(cpf: string): Promise<EntityClient>;
}
