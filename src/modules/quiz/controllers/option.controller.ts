import { Controller, ValidationPipe } from "@nestjs/common";
import { Body, HttpCode, Post, UsePipes } from "@nestjs/common/decorators";
import { CreateOptionDto } from "../dto/create-option.dto";
import { OptionService } from "../services/option.service";
import { QuestionService } from "../services/question.service";

@Controller('/questions/option')
export class OptionController {
    constructor(private optionService: OptionService, private questionService: QuestionService) { }

    @Post('')
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    async createOption(@Body() optionData: CreateOptionDto) {
        const question = await this.questionService.getQuestionById(optionData.questionId);
        const result = await this.optionService.createOption(optionData, question);
        return result;
    }
}