import { Endereco } from './endereco.entity';

export abstract class Usuario {
    id: number;

    name: number;

    cpf: string;

    endereco: Endereco;
}
