import { ICreatedUserDTO } from 'src/v1/modules/user/dtos/ICreatedUser.DTO';
import { IUpdatedUserDTO } from 'src/v1/modules/user/dtos/IUpdatedUser.DTO';
import IRepositoryUser from 'src/v1/modules/user/repositories/User.repository';
import { EntityClient } from 'src/v1/modules/user/typeorm/entities/User.entity';
import { EntityRepository, getRepository, Repository } from 'typeorm';

@EntityRepository(EntityClient)
export class RepositoryUser
  extends Repository<IRepositoryUser>
  implements IRepositoryUser
{
  private readonly ormRepository: Repository<EntityClient>;

  constructor() {
    super();
    this.ormRepository = getRepository(EntityClient);
  }

  public async createUser(data: ICreatedUserDTO): Promise<EntityClient> {
    const user = this.ormRepository.create(data);

    return await this.ormRepository.save(user);
  }

  public async updateClient(data: IUpdatedUserDTO): Promise<EntityClient> {
    throw new Error('Method not implemented.');
  }

  public async removeClient(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
  public async findAll(): Promise<EntityClient[]> {
    return await this.ormRepository.find();
  }
  public async findById(id: string): Promise<EntityClient> {
    return id ? await this.ormRepository.findOne({ where: { id } }) : undefined;
  }
  public async findByName(name: string): Promise<EntityClient> {
    return name
      ? await this.ormRepository.findOne({ where: { name } })
      : undefined;
  }

  public async findByCpf(cpf: string): Promise<EntityClient> {
    return cpf
      ? await this.ormRepository.findOne({ where: { cpf } })
      : undefined;
  }
}
