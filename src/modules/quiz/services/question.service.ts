import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateQuestionDto } from "../dto/create-question.dto";
import { Question } from "../entities/question.entity";
import { Quiz } from "../entities/quiz.entity";

@Injectable()
export class QuestionService {
    constructor(@InjectRepository(Question) private questionRepository: Repository<Question>) { }

    async createQuestion(questionData: CreateQuestionDto, quiz: Quiz): Promise<Question> {
        const question = await this.questionRepository.save(questionData);
        console.log(quiz);
        quiz.questions = [...quiz.questions, question];
        await quiz.save();
        return question;
    }
}