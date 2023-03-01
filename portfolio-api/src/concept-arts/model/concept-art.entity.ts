import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ConceptArt {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
  @Column()
  adress: string;
  @Column()
  text: string;
}
