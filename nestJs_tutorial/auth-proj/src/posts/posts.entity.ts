import { Users } from 'src/users/users.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm/browser';

@Entity()
export class Posts {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'varchar',
    length: 200,
  })
  title: string;
  @Column({
    type: 'varchar',
    length: 200,
    unique: true,
    nullable: false,
  })
  content: string;
  @ManyToOne(() => Users, (users) => users.posts, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  @JoinColumn()
  users: Users;
}
