import { ValidationPipe } from "@nestjs/common";
import { Body, Controller, HttpCode, Post, UsePipes } from "@nestjs/common/decorators";
import { CreateQuestionDto } from "../dto/create-question.dto";
import { Question } from "../entities/question.entity";
import { QuestionService } from "../services/question.service";
import QuizService from "../services/quiz.service";

@Controller('/questions')
export class QuestionController {
    constructor(private questionService: QuestionService, private quizService: QuizService) { }

    @Post()
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    async createQuestion(@Body() questionData: CreateQuestionDto): Promise<Question> {
        const quiz = await this.quizService.getQuizById(questionData.quizId);
        return await this.questionService.createQuestion(questionData, quiz);
    }
}