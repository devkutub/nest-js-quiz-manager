import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfigAsync } from './config/typeOrm.config';
import { QuizModule } from './modules/quiz/quiz.module';

@Module({
  imports: [QuizModule, TypeOrmModule.forRootAsync(typeOrmConfigAsync), ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
