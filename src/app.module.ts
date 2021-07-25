import { Module } from '@nestjs/common';
import { AppGateway } from './app/app.gateway';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppGateway,AppService],
})
export class AppModule {}
