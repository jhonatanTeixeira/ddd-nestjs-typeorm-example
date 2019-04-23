import { BuscaImoveisParametros, ImovelRepositoryInterface } from '../../domain/repository/imovel.repository.interface';
import { Imovel } from '../../domain/model/imovel.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Imovel)
export class ImovelRepository  extends Repository<Imovel> implements ImovelRepositoryInterface {
    buscaImoveis(parametros: BuscaImoveisParametros): Promise<[Imovel[], number]> {
        return this.createQueryBuilder('imovel')
            .leftJoinAndSelect('imovel.endereco', 'endereco')
            .where('endereco.cidade IN (:cidades)', {cidades: parametros.cidades})
            .orWhere('endereco.bairros IN (:bairros)', {bairros: parametros.bairros})
            .getManyAndCount()
        ;
    }
}
