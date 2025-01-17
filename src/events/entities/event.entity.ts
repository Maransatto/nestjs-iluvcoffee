import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index(['name', 'type']) // compound indexes
@Entity('events')
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Index() // index to a column
  @Column()
  name: string;

  @Column('json')
  payload: Record<string, any>;
}
