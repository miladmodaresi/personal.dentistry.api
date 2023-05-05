import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Task } from 'src/dentistry/task/entities/task.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  family: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @Column()
  role: string;

  @Column()
  type: number;

  @OneToMany((type) => Task, (task) => task.user, { eager: true })
  tasks: Task[];

  @CreateDateColumn()
  createdAt: string;

  @CreateDateColumn()
  updateAt: string;

  async validatePassword(password: string): Promise<boolean> {
    console.log(this.salt);
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}
