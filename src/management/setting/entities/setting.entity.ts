import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Setting extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  slug: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true, type: 'longtext' })
  value: string;
}
