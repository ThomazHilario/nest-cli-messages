import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository'

@Injectable()
export class MessagesServices{
    messaggesRepo:MessagesRepository

    // Constructor
    constructor(messagesRepo: MessagesRepository){
        // O service ja cria as suas dependencias sem precisar isntaciar
        this.messaggesRepo = messagesRepo
    }

    async findOne(id:string){
        return this.messaggesRepo.findOne(id)
    }

    async findAll(){
        return this.messaggesRepo.findAll()
    }

    async createOneMessage(message:string){
        return this.messaggesRepo.createOneMessage(message)
    }
}

/*
    -> Service 
    - Este arquivo é responsável pelas regras de negócio.
    - Nele o codigo se assemelha um pouco ao de repositório pois é um pouco repetitivo.
    - Devemos inmportar a classe de repositório e adaptar com as regras de negócio.
    - A classe de service será exportada e importada no controller, logo em seguida instancia-la.
*/