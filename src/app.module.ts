import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';
import { CoffeesModule } from './coffees/coffees.module';
import appConfig from './config/app.config';
import { DatabaseModule } from './database/database.module';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      // this will now be loaded after all the application bootsprapped is loaded
      useFactory: () => ({
        type: 'postgres',
        host: process.env.DATABASE_HOST,
        port: +process.env.DATABASE_PORT,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    ConfigModule.forRoot({
      // envFilePath: '.environment', // specify the .env file name
      // ignoreEnvFile: true, // ignore .env files
      // validationSchema: Joi.object({
      //   DATABASE_HOST: Joi.required(),
      //   DATABASE_PORT: Joi.number().default(5432),
      // }),
      load: [appConfig],
    }),
    CoffeesModule,
    CoffeeRatingModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_PIPE, useClass: ValidationPipe }],
})
export class AppModule {}
