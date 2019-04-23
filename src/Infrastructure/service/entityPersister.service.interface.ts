export interface EntityPersisterServiceInterface {
    getMany<Entity, Filter>(filter: Filter): Promise<[Entity[], number]>;

    getOne<Entity>(id: number): Promise<Entity>;

    save<Entity>(entity: Entity): Promise<Entity>;
}
