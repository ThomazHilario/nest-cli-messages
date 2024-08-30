import { IsString } from "class-validator";

export class CreateMessageDto {
    @IsString()
    message:string
}

/*
    -> DTO
    - Data Transfer Object
    - É uma maneira de criar uma validação para uma requisição.
    - Temos que instalar duas dependências antes de começar: npm i class-validator class-transformer

    - A estrutura nada mais é que uma classe, que será uma tipagem de um parâmetro de uma requisição.
    - Na Classe será colocado os campos tipados com typescript e com o class-validator.
    - Terminada a estrutura da classe basta exporta-la e importa-la no controller, e adicionar como uma tipagem de um parâmetro de uma requisição.
*/