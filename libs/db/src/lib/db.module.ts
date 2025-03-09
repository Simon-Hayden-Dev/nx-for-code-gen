import { Module, Global } from '@nestjs/common';
import { PrismaClientService } from './prisma-client.service';

@Global()
@Module({
  controllers: [],
  providers: [PrismaClientService],
  exports: [PrismaClientService],
})
export class DbModule {}
