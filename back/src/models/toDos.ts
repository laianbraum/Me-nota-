import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('toDos')
export default class ToDos {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  description: string;

  @Column()
  isCompleted: boolean;
}