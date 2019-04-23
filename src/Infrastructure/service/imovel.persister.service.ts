import { EntityPersisterServiceInterface } from './entityPersister.service.interface';
import { Imovel } from '../../domain/model/imovel.entity';
import { BuscaImoveisParametros, ImovelRepositoryInterface } from '../../domain/repository/imovel.repository.interface';
import { EntityManager, Repository } from 'typeorm';

export class ImovelPersisterService implements EntityPersisterServiceInterface {
    constructor(
        readonly imovelRepository: ImovelRepositoryInterface & Repository<Imovel>,
    ) {}

    getOne(id: number): Promise<Imovel> {
        return this.imovelRepository.findOne(id);
    }

    getMany(filter: BuscaImoveisParametros): Promise<[Imovel[], number]> {
        return this.imovelRepository.buscaImoveis(filter);
    }

    save(entity: Imovel): Promise<Imovel> {
        return this.imovelRepository.save(entity);
    }
}
