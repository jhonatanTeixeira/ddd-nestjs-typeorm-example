import { EntitySchema } from 'typeorm';
import { Imovel } from '../../../domain/model/imovel.entity';
import { Endereco } from '../../../domain/model/endereco.entity';
import { Proprietario } from '../../../domain/model/proprietario.entity';

export const Imovel = new EntitySchema<Imovel>({
  name: 'imovel',
  columns: {
    id: {
      primary: true,
      generated: true,
      type: 'integer',
    },
    tipo: {
      type: 'integer',
    },
    valor: {
      type: 'decimal',
    },
    area: {
      type: 'decimal',
    },
    quartos: {
      type: 'integer',
    },
    banheiros: {
      type: 'integer',
    },
    suites: {
      type: 'integer',
    },
  },
  relations: {
    endereco: {
      type: 'many-to-one',
      target: Endereco,
    },
    endereco: {
      type: 'many-to-one',
      target: Proprietario,
    },
  },
});
