import { TypeORMRepository } from "src/shared/typeorm.repository";
import { DataSource } from "typeorm";
import { Injectable } from "@nestjs/common";
import { Loan } from "../entities/loan.entity";
import { LoanRepository } from "../entities/loan.repository";

@Injectable()
export class TypeORMLoanRepository extends TypeORMRepository<Loan> implements LoanRepository {
	constructor(ds: DataSource) {
		super(ds.getRepository(Loan))
	}
	async findOne(id: string): Promise<Loan|null> {
		return this.repository.findOneBy({ id: id })
	}
}
