import { AbstractRepository } from "src/shared/repository";
import { Loan } from "./loan.entity";

export abstract class LoanRepository extends AbstractRepository<Loan> {
	abstract findOne(id: string): Promise<Loan | null>
}
