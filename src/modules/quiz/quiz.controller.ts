import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateQuizDto } from './dto/CreateQuiz.dto';
import QuizService from './quiz.service';

@Controller('quiz')
export class QuizController {
    constructor(private quizService: QuizService) { }

    @Get()
    getAllQuiz(): Array<number | string> {
        return this.quizService.getAllQuiz();
    }

    @Post()
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    async createQuiz(@Body() quizData: CreateQuizDto) {
        const resp = await this.quizService.createQuiz(quizData);
        return { success: true, message: "created successfully", data: resp };
    }
}
