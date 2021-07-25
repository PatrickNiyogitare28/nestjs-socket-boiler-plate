import { Controller, Body, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MessageDto } from './dto/message.dto';
import { AppGateway } from './app.gateway';

@Controller('api/v1/message')
export class AppController {
    constructor(
        public readonly appService: AppService,
        public appGateWay: AppGateway
        ){

    }

    @Post()
    public async sendMessage(@Body() message: MessageDto): Promise<any>{
        return this.appGateWay.sendMessage(message)
    }
}
