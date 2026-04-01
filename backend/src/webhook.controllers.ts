import { Body, Controller, Post, Headers } from "@nestjs/common";
import { CatalogService } from "./catalog/catalog.service";

@Controller('webhooks')
export class WebhookController {
  constructor(
    private readonly catalogService: CatalogService
  ){}

  @Post('openai')
  handleOpenAIWebhook(@Body() body: string, @Headers() headers: Record<string, string>) {
    return this.catalogService.handleEmbeddingWebhook(body, headers);
  }
}
  