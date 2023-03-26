import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "./question.entity";

@Entity('options')
export class Option extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar" })
    text: string;

    @Column({ type: "boolean" })
    isCorrect: boolean;

    @ManyToOne(type => Question, question => question.options)
    question: string;
}