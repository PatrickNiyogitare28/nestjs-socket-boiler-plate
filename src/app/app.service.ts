import { Injectable } from '@nestjs/common';
import {MessageDto} from './dto/message.dto';
import {AppGateway} from './app.gateway';

@Injectable()
export class AppService {
    constructor(){}

    public async sendMessage(msg: any):Promise<any>{
        const gateWay = new AppGateway();
        gateWay.sendMessage(msg);
        return msg;
    }
}
