import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  UpdateDateColumn,
} from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm/browser';
import { Passports } from '../passports/passports.entity';
import { Posts } from 'src/posts/posts.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'varchar',
    length: 500,
    unique: false,
    nullable: false,
  })
  name: string;
  @Column({
    type: 'varchar',
    length: 500,
    unique: true,
    nullable: false,
  })
  email: string;
  @Column({
    type: 'varchar',
    length: 10,
    unique: false,
    nullable: false,
    default: 'male',
  })
  gender: string;
  @Column({
    type: 'int',
  })
  age: number;
  @Column({
    type: 'varchar',
    length: 1000,
    unique: true,
    nullable: false,
  })
  profilePic: string;
  @CreateDateColumn()
  createDate: Date;
  @UpdateDateColumn()
  updateDate: Date;

  @OneToOne(() => Passports, (passports) => passports.users)
  passports: Passports;

  @OneToMany(() => Posts, (posts) => posts.users)
  posts: Posts[];
}
