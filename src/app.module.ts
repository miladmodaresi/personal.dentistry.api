import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from 'config/database.config';
import { AuthModule } from './auth/auth.module';
import { ManagementModule } from './management/management.module';
import { DentistryModule } from './dentistry/dentistry.module';
import { NestjsFormDataModule } from 'nestjs-form-data';
@Module({
  imports: [
    NestjsFormDataModule,
    TypeOrmModule.forRoot(databaseConfig),
    AuthModule,
    ManagementModule,
    DentistryModule,
  ],
})
export class AppModule {}
