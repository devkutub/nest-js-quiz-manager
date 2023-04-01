import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateQuizDto } from "../dto/CreateQuiz.dto";
import { Quiz } from "../entities/quiz.entity";

@Injectable()
export default class QuizService {
    constructor(@InjectRepository(Quiz) private quizRepository: Repository<Quiz>) { }
    async getAllQuiz(): Promise<Quiz[]> {
        return await this.quizRepository
            // .find({ relations: ['questions'] });
            .createQueryBuilder('q')
            .leftJoinAndSelect('q.questions', "qt")
            .leftJoinAndSelect('qt.options', 'o')
            .getMany();
    }

    async getQuizById(id: number) {
        return await this.quizRepository.findOne({ where: { id }, relations: ['questions', 'questions.options'] });
    }

    async createQuiz(quizData: CreateQuizDto) {
        await this.quizRepository.save(quizData);
        return quizData;
    }
}