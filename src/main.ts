import {NestFactory} from '@nestjs/core'
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger'
import {AppModule} from './app.module'

async function bootstrap() {
  const PORT = process.env.PORT || 5000
  const app = await NestFactory.create(AppModule)
  const config = new DocumentBuilder()
    .setTitle('Ouroboros')
    .setDescription('Ouroboros API description')
    .setVersion('1.0')
    .addTag('ouroboros')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api/docs', app, document)
  app.enableCors()
  await app.listen(PORT, () => console.log('Server started on port ', PORT))
}
bootstrap()
