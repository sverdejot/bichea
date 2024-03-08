import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { UserRepository } from './entities/user.repository';

@Injectable()
export class UsersService {
	constructor(private readonly repository: UserRepository) {
	}
  create(id: string, createUserDto: CreateUserDto) {
		let user: User = new User()

		user.id = id
		user.name = createUserDto.name
		user.mail = createUserDto.mail

		this.repository.save(user)
  }

  findAll() {
    return this.repository.findAll()
  }

  findOne(id: string) {
    return this.repository.findOne(id)
  }
}
