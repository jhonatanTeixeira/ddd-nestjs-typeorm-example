import { Imovel } from '../model/imovel.entity';

export interface ImovelRepositoryInterface {
    buscaImoveis(parametros: BuscaImoveisParametros): Promise<[Imovel[], number]>;
}

export interface BuscaImoveisParametros {
    estados: string[];
    cidades: string[];
    bairros: string[];
    quartos: {min: number, max: number};
    banheiros: {min: number, max: number};
    suites: {min: number, max: number};
    area: {min: number, max: number};
}
