import { Injectable } from '@nestjs/common';
import { CreateLoanDto } from './dto/create-loan.dto';
import { LoanRepository } from './entities/loan.repository';
import { Loan } from './entities/loan.entity';

@Injectable()
export class LoansService {
	constructor(private readonly repository: LoanRepository){
	}
  async create(id: string, createLoanDto: CreateLoanDto) {
		let loan: Loan = new Loan()

		loan.id = id
		loan.used_amount = createLoanDto.used_amount
		loan.approved_amount = createLoanDto.approved_amount

		await this.repository.save(loan)
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: string) {
    return await this.repository.findOne(id)
  }
}
