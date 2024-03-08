import { Repository } from "typeorm"
import { Entity } from "./entity"
import { AbstractRepository } from "./repository"

export abstract class TypeORMRepository<TEntity extends Entity> implements AbstractRepository<TEntity> {
		protected constructor(protected readonly repository: Repository<TEntity>) {}

		async save(entity: TEntity) {
			this.repository.save(entity)
		}

		async findAll(): Promise<TEntity[]> {
			return this.repository.find({})
		}
}
