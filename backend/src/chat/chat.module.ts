import { Module } from "@nestjs/common";
import { PostgresService } from "../shared/postgres.service";
import { ChatService } from "./chat.service";
import { ChatController } from "./chat.controller";

@Module({
  controllers: [ChatController],
  providers: [PostgresService, ChatService]
})
export class ChatModule {}