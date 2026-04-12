import { Module } from '@nestjs/common';
import { PostgresService } from '../shared/postgres.service';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { LlmModule } from 'src/shared/llm/llm.module';

@Module({
  imports: [LlmModule],
  controllers: [ChatController],
  providers: [PostgresService, ChatService],
})
export class ChatModule {}
