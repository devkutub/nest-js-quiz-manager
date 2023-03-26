import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateQuizDto } from "../dto/CreateQuiz.dto";
import { Quiz } from "../entities/quiz.entity";

@Injectable()
export default class QuizService {
    constructor(@InjectRepository(Quiz) private quizRepository: Repository<Quiz>) { }
    getAllQuiz(): Array<number | string> {
        return [1, 2, 3, "r", "from the service"]
    }

    async getQuizById(id: number) {
        return await this.quizRepository.findOne({ where: { id }, relations: ['questions'] });
    }

    async createQuiz(quizData: CreateQuizDto) {
        await this.quizRepository.save(quizData);
        return quizData;
    }
}