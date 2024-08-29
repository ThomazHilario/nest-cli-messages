import { readFile, writeFile } from 'fs/promises'

export class MessagesRepository{
    async findOne(id:string){
        try {
            const response = await readFile('messages.json', 'utf-8')
            const data = JSON.parse(response)

            return data.find(message => message.id === id)
        } catch (error) {
            console.log(error)
        }
    }

    async findAll(){
        try {
            const response = await readFile('messages.json', 'utf-8')
            const data = JSON.parse(response)

            return data
        } catch (error) {
            console.log(error)
        }
    }

    async createOneMessage(message:string){
        try {
            const response = await readFile('messages.json', 'utf-8')
            const data = JSON.parse(response)

            data.push({
                id:crypto.randomUUID(),
                message
            })

            await writeFile('messages.json',JSON.stringify(data))
        } catch (error) {
            console.log(error)
        }
    }
}

/*
    -> Repository
    - Arquivo responsável pela comunicação com o banco de dados. 
*/