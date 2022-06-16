import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/user.module';

@Module({
  // !connection to mongoDB
  imports: [MongooseModule.forRoot('mongodb://localhost/demo'), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
