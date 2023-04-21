import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Setting {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  slug: string;

  @Column({ nullable: true, type: 'longtext' })
  value: string;
}
