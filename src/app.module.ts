import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from 'config/database.config';
import { AuthModule } from './auth/auth.module';
import { ManagementModule } from './management/management.module';
import { DentistryModule } from './dentistry/dentistry.module';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { HomeModule } from './home/home.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
@Module({
  imports: [
    NestjsFormDataModule,
    TypeOrmModule.forRoot(databaseConfig),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    AuthModule,
    ManagementModule,
    DentistryModule,
    HomeModule,
  ],
})
export class AppModule {}
