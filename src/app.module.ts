import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [OrdersModule], // Registrar outros módulos
  controllers: [AppController], // Registrar os controladores
  providers: [AppService],
})
export class AppModule {}
