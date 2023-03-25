import { ValidationPipe } from "@nestjs/common";
import { Body, Controller, HttpCode, Post, UsePipes } from "@nestjs/common/decorators";
import { CreateQuestionDto } from "./dto/create-question.dto";
import { Question } from "./question.entity";
import { QuestionService } from "./question.service";

@Controller('/questions')
export class QuestionController {
    constructor(private questionService: QuestionService) { }

    @Post()
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    async createQuestion(@Body() questionData: CreateQuestionDto): Promise<Question> {
        return await this.questionService.createQuestion(questionData);
    }
}