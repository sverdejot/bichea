import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class User {
	@PrimaryColumn()
	id: string

	@Column()
	mail: string

	@Column()
	name: string
}
