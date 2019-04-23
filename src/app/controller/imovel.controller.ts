import { EntityPersisterServiceInterface } from '../../Infrastructure/service/entityPersister.service.interface';
import { BuscaImoveisParametros } from '../../domain/repository/imovel.repository.interface';
import { Imovel } from '../../domain/model/imovel.entity';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('/imoveis')
export class ImovelController {
    constructor(
        readonly persister: EntityPersisterServiceInterface,
    ) {}

    @Get('/')
    getAll(filter: BuscaImoveisParametros) {
        return this.persister.getMany(filter);
    }

    @Get('/:id')
    getOne(@Param() id: number) {
        return this.persister.getOne(id);
    }

    @Post('/')
    insert(@Body() imovel: Imovel) {
        return this.persister.save(imovel);
    }

    @Put('/:id')
    update(@Body() imovel: Imovel) {
        return this.persister.save(imovel);
    }
}
