import { DataSource } from "typeorm";
import { Injectable } from "@nestjs/common";
import { TypeORMRepository } from "src/shared/typeorm.repository";
import { User } from "../entities/user.entity";
import { UserRepository } from "../entities/user.repository";

@Injectable()
export class TypeORMUserRepository extends TypeORMRepository<User> implements UserRepository {
	constructor(ds: DataSource) {
		super(ds.getRepository(User))
	}
	async findOne(id: string): Promise<User|null> {
		return this.repository.findOneBy({ id: id })
	}
}
