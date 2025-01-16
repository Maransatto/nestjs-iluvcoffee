import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

const ORM_OPTIONS: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  autoLoadEntities: true,
  synchronize: true,
};

@Module({
  imports: [CoffeesModule, TypeOrmModule.forRoot(ORM_OPTIONS)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
