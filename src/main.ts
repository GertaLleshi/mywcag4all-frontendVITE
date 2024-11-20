import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express'; // Importa il modulo express
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configura i limiti della dimensione del corpo delle richieste
  app.use(express.json({ limit: '50mb' })); // Limite di 50 MB per JSON
  app.use(express.urlencoded({ limit: '50mb', extended: true })); // Limite di 50 MB per URL encoded

  app.enableCors(); // Abilita CORS

  console.log("Server running on port: ", process.env.PORT || 3015);
  await app.listen(process.env.PORT || 3015);
}
bootstrap();