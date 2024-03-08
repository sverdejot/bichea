import { Module } from '@nestjs/common';
import { LoansService } from './loans.service';
import { LoansController } from './loans.controller';
import { LoanRepository } from './entities/loan.repository';
import { TypeORMUserRepository } from 'src/users/persistance/typeorm.repository';

@Module({
  controllers: [LoansController],
  providers: [LoansService, 
		{
			provide: LoanRepository,
			useClass: TypeORMUserRepository
		}],
})
export class LoansModule {}
