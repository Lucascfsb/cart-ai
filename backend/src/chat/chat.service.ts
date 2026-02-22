import { Injectable } from "@nestjs/common";
import { PostgresService } from "../shared/postgres.service";

@Injectable()
export class ChatService {
  constructor(
    private readonly chatRepository: PostgresService
  ) {}

  async createChatSession(userId: number) {
    const result = await this.chatRepository.client.query<{id: number}>(
      `INSERT INTO chat_sessions (user_id) VALUES ($1) RETURNING id`,
      [userId]
    );
    return result.rows[0];
  }

  async getChatSessionById(id: number) {
    const result = await this.chatRepository.client.query<{id: number, user_id: number, created_at: Date}>(
      `SELECT id, user_id, created_at FROM chat_sessions WHERE id = $1`,
      [id]
    );
    return result.rows[0];
  }
}