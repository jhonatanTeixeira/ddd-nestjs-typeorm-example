import { Module } from '@nestjs/common';
import { InfrastructureModule } from './Infrastructure/infrastructure.module';
import { ImovelController } from './app/controller/imovel.controller';

@Module({
  imports: [
      InfrastructureModule,
  ],
  controllers: [
      ImovelController,
  ],
  providers: [],
})
export class AppModule {}
