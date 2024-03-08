import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserRepository } from './entities/user.repository';
import { TypeORMUserRepository } from './persistance/typeorm.repository';

@Module({
  controllers: [UsersController],
  providers: [UsersService, 
		{
			provide: UserRepository,
			useClass: TypeORMUserRepository 
		}
	],
})
export class UsersModule {}
