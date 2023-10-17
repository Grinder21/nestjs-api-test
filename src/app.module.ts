import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PostsController } from './app.controller';

@Module({
  imports: [HttpModule],
  controllers: [PostsController],
})
export class AppModule {}
