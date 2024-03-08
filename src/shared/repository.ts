import { Entity } from "./entity";

export abstract class AbstractRepository<T extends Entity> {
	abstract save(entity: T): Promise<void>
	abstract findAll(): Promise<T[]>
}
