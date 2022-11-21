import { SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import Swagger from './swagger';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT;

  const documentSwagger = SwaggerModule.createDocument(app, Swagger);
  SwaggerModule.setup('swagger', app, documentSwagger);
  await app.listen(port);

  logger.log(`Application listtening on port ${port}`);
}
bootstrap();
