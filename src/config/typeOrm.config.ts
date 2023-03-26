import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Quiz } from '../modules/quiz/entities/quiz.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'quiz',
    entities: [],
    synchronize: true,
    autoLoadEntities: true
}
