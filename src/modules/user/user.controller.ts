import { Body, Controller, HttpStatus, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { SETTINGS } from "../app.utils";
import { UserRegistrationDto } from "./dto/register-user.dto";
import { User } from "./user.entity";
import { UserService } from "./user.service";

@Controller('/users')
export class UserController {
    constructor(private userService: UserService) { }

    @Post('/register')
    // @UsePipes(ValidationPipe)
    async doUserRegistration(@Body(SETTINGS.VALIDATION_PIPE) userRegistrationData: UserRegistrationDto): Promise<User> {
        try {
            return await this.userService.doUserRegistration(userRegistrationData);
        } catch (error) {
            throw error;
        }
    }
}