import { Module } from "@nestjs/common";
import { PostgresService } from "../shared/postgres.service";
import { ChatService } from "./chat.service";
import { ChatController } from "./chat.controller";
import { LlmService } from "../shared/llm.service";

@Module({
  controllers: [ChatController],
  providers: [PostgresService, ChatService, LlmService]
})
export class ChatModule {}