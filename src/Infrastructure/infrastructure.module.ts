import { Module } from '@nestjs/common';
import { ImovelPersisterService } from './service/imovel.persister.service';

@Module({
  imports: [],
  controllers: [],
  providers: [
      ImovelPersisterService,
  ],
})
export class InfrastructureModule {}
