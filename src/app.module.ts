import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { UserAuthModule } from './user-auth/user-auth.module';


import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ 
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot('mongodb+srv://abrhamwube:mikiwube29@abrhamwube.6darlxm.mongodb.net/nest?retryWrites=true&w=majority'),
     UserAuthModule ,
     
  ],
  controllers: [AppController],
  providers: [AppService],
  
  
})
export class AppModule {}
