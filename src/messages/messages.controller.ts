import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages(){
        return 'hello moto'
    }

    @Post()
    createMessage(@Body() body:CreateMessageDto){
        return body
    }

    @Get('/:id')
    getOneMessages(@Param('id') id:string){
        return `Value is ${id}`
    }
}

/* 
    -> Controller -> local onde estarão configuradas as rotas. 

        -> Acessar valor de requisições:
        - Podemos usar decorators para acessar o valor de uma requisição e armazena-la em um parâmetro.
        - Devemos fazer os imports dos decorators(@Body(), @id(),...) da biblioteca nestjs/common
    
        Exemplo de como usar:

        @Post()
        createMessage(@Body() body:any){
            return body
        }

        - A função acima possui um decorator @Body() antes do parâmetro body, este decorator pega uma requisição do tipo post que o usuário envia e armazena no parâmetro. (Também é possível armazenar um valor de uma requisição get, caso o usuário passe um parâmetro de id durante a requisição get. Para isso usamos o decorator de @id()).
    
*/