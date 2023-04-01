import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  database: 'dentistry',
  username: 'root',
  password: 'root',
  autoLoadEntities: true,
  synchronize: true,
};
