import { Endereco } from './endereco.entity';
import { Proprietario } from './proprietario.entity';

export class Imovel {
    id: number;

    endereco: Endereco;

    tipo: TipoImovelEnum;

    valor: number;

    area: number;

    quartos: number;

    banheiros: number;

    suites: number;

    prorietario: Proprietario;
}

export enum TipoImovelEnum {
    APARTAMENTO = 1,
    CASA = 2,
    SITIO = 3,
}
