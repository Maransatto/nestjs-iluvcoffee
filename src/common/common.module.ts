import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ApiKeyGuard } from './guards/api-key/api-key.guard';
import { LoggingMiddleware } from './middleware/logging/logging.middleware';

@Module({
  imports: [ConfigModule],
  providers: [{ provide: APP_GUARD, useClass: ApiKeyGuard }],
})
export class CommonModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // apply to all endpoints
    consumer.apply(LoggingMiddleware).forRoutes('*');

    // apply to prefix coffees
    // consumer.apply(LoggingMiddleware).forRoutes('coffees');

    // includes the method
    // consumer
    //   .apply(LoggingMiddleware)
    //   .forRoutes({ path: 'coffees', method: RequestMethod.GET });

    // all but exclude coffees prefix
    // consumer.apply(LoggingMiddleware).exclude('coffees').forRoutes('*');
  }
}
