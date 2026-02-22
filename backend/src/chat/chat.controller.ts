import { Controller, Get, NotFoundException, Param, Post } from "@nestjs/common";
import { ChatService } from "./chat.service";

@Controller('chat')
export class ChatController {
  private readonly userId = 1; 

  constructor(
    private readonly chatService: ChatService
  ) {}

  @Post()
  async createChatSession() {
    const chatSession = await this.chatService.createChatSession(this.userId);
    return chatSession;
  }

  @Get(':sessionId')
  async getChatSession(@Param('sessionId') sessionId: number) {
    const chatSession = await this.chatService.getChatSessionById(sessionId);
    if (!chatSession) {
      throw new NotFoundException('Chat session not found');
    }
    return chatSession;
  }
}