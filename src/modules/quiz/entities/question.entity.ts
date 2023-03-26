import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Option } from "./option.entity";
import { Quiz } from "./quiz.entity";

@Entity('questions')
export class Question extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar" })
    title: string;

    @ManyToOne(type => Quiz, (quiz) => quiz.questions)
    quiz: Quiz;

    @OneToMany(type => Option, option => option.question)
    options: Option[]
}