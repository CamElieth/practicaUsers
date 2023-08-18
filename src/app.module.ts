import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarcasModule } from './marcas/marcas.module';
import { ModelosModule } from './modelos/modelos.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host: 'localhost',
      username:'postgres',
      password:'Ej@091019',
      port: 5432,
      database:'store',
      synchronize: true
  }),
    MarcasModule, ModelosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
