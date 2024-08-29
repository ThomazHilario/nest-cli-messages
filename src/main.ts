import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);

  // Instanciando o ValidationPipe nas configurações globais do app.
  app.useGlobalPipes(
    new ValidationPipe()
  )

  await app.listen(3000);
}
bootstrap();


/*
  -> main.ts
  - Local onde terá algumas configurações para executar o servidor e usar pipes de validação.
  - Para adicionar pipe devemos importar o ValidationPipe e instanciar dentro do global pipes do app:
    Exemplo:

    app.useGlobalPipes(
      new ValidationPipe()
    )

  - Com as configurações feitas, basta agora criar um arquivo de DTO(Data transfer Object) para criar a validação.

*/