import { Column, Entity, JoinColumn, JoinTable, OneToOne } from 'typeorm';
import { Users } from 'src/users/users.entity';
import { PrimaryGeneratedColumn } from 'typeorm/browser';

@Entity()
export class Passports {
  @PrimaryGeneratedColumn('uuid')
  passportNo: string;
  @Column()
  nationality: string;
  @OneToOne(() => Users, (users) => users.passports, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  users: Users;
}
