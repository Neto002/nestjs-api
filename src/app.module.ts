import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [], // Registrar outros módulos
  controllers: [AppController], // Registrar os controladores
  providers: [AppService],
})
export class AppModule {}
