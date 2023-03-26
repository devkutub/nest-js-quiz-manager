import { Body, Controller, Get, HttpCode, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { Quiz } from '../entities/quiz.entity';
import QuizService from '../services/quiz.service';

@Controller('quiz')
export class QuizController {
    constructor(private quizService: QuizService) { }

    @Get()
    getAllQuiz(): Promise<Quiz[]> {
        return this.quizService.getAllQuiz();
    }

    @Get('/:id')
    async getQuizById(@Param('id') id: number): Promise<Quiz> {
        return await this.quizService.getQuizById(id);
    }

    @Post()
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    async createQuiz(@Body() quizData: CreateQuizDto) {
        const resp = await this.quizService.createQuiz(quizData);
        return { success: true, message: "created successfully", data: resp };
    }
}
