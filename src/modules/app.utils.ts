import { HttpStatus, ValidationPipe } from "@nestjs/common";

const PASSWORD_RULE = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const PASSWORD_RULE_MESSAGE = "Password should contain at least one upper case, one lower case, once number and one special characters";
const VALIDATION_PIPE = new ValidationPipe({ errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY });

export const REGEX = {
    PASSWORD_RULE
};
export const MESSAGES = {
    PASSWORD_RULE_MESSAGE
}
export const SETTINGS = {
    VALIDATION_PIPE
}