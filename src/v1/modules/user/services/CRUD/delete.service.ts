import { BadRequestException } from '@nestjs/common';
import IRepositoryUser from 'src/v1/modules/user/repositories/User.repository';

interface IRequest {
  data: string;
  repository: IRepositoryUser;
}

const deleteUser = async ({ data, repository }: IRequest): Promise<void> => {
  const user = await repository.findById(data);
  console.log(user);
  if (!user) {
    throw new BadRequestException([`User with id ${data} not found`]); //validation of service
  }

  repository.removeClient(data);
};

export default deleteUser;
