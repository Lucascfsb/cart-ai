import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { CatalogModule } from './catalog/catalog.module';
import { ConfigModule } from '@nestjs/config';
import { CartModule } from './cart/cart.module';
import { ChatModule } from './chat/chat.module';
import { WebhookController } from './webhook.controllers';
import { RawBodyMiddleware } from './middlawares/raw-body.middleware';
import { JsonBodyMiddleware } from './middlawares/json-body.middleware';

@Module({
  imports: [
    CatalogModule,
    CartModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ChatModule,
  ],
  controllers: [WebhookController],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(RawBodyMiddleware)
      .forRoutes({
        path: '/webhooks/openai',
        method: RequestMethod.POST,
      })
      .apply(JsonBodyMiddleware)
      .forRoutes('*');
  }
}
