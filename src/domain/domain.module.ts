import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImovelRepository } from '../Infrastructure/repository/Imovel.repository';

@Module({
  imports: [
      TypeOrmModule.forFeature([
          ImovelRepository,
      ]),
  ],
  controllers: [],
  providers: [],
})
export class DomainModule {}
