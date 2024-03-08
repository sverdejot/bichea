import { AbstractRepository } from "src/shared/repository";
import { User } from "./user.entity";

export abstract class UserRepository extends AbstractRepository<User> {
	abstract findOne(id: string): Promise<User|null>
}
