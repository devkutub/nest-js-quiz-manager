import { Injectable } from "@nestjs/common";

@Injectable()
export default class QuizService {
    getAllQuiz(): Array<number | string> {
        return [1, 2, 3, "r", "from the service"]
    }
}