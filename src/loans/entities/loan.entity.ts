import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Loan {
	@PrimaryColumn()
	id: string

	@Column()
	approved_amount: number
	
	@Column()
	used_amount: number

	get remaining_amount(): number {
		return this.approved_amount - this.used_amount
	}
}
