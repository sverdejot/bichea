import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { LoansModule } from './loans/loans.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { Loan } from './loans/entities/loan.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [User, Loan],
      synchronize: true,
    }), 
		UsersModule, 
		LoansModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
