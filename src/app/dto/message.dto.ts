import {IsString, IsNotEmpty, Length} from 'class-validator';

export class MessageDto {
    @IsNotEmpty()
    @IsString()
    @Length(2, 15)
    name: string;

    @IsNotEmpty()
    @IsString()
    text: string;
}