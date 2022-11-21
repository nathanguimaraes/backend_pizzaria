import { ConflictException } from '@nestjs/common';
import { ICreatedUserDTO } from 'src/v1/modules/user/dtos/ICreatedUser.DTO';
import IRepositoryUser from 'src/v1/modules/user/repositories/User.repository';
import { EntityClient } from 'src/v1/modules/user/typeorm/entities/User.entity';

interface IRequest {
  repository: IRepositoryUser;
  data: ICreatedUserDTO;
}

const create = async ({
  data,
  repository,
}: IRequest): Promise<EntityClient> => {
  const user = repository.findByName(data.name);

  if (user) {
    throw new ConflictException([`User with name ${data.name} already exists`]); //validation
  }

  const cpfUser = repository.findByCpf(data.cpf);

  if (cpfUser) {
    throw new ConflictException([`User with cpf ${data.cpf} already exists`]);
  }

  return repository.createUser(data);
};

export default create;
