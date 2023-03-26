import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateOptionDto } from "../dto/create-option.dto";
import { Option } from "../entities/option.entity";
import { Question } from "../entities/question.entity";

@Injectable()
export class OptionService {
    constructor(@InjectRepository(Option) private optionRepository: Repository<Option>) { }

    async createOption(option: CreateOptionDto, question: Question): Promise<{ option: Option, question: Question }> {
        const optionResp = await this.optionRepository.save(option);

        question.options = [...question.options, optionResp];
        await question.save();

        return { option: optionResp, question };
    }
}