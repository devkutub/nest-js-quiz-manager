import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserRegistrationDto } from "./dto/register-user.dto";
import { User } from "./user.entity";

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    async doUserRegistration(userRegistrationData: UserRegistrationDto): Promise<User> {
        try {
            if (userRegistrationData.password !== userRegistrationData.confirmPassword) throw "Password, Confirm Password should match";
            let user = new User();

            user.name = userRegistrationData.name;
            user.email = userRegistrationData.email;
            user.password = userRegistrationData.password;

            return await user.save();
            // return await this.userRepository.save(user);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}