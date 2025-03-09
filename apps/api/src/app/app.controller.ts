import { Controller, Get } from '@nestjs/common';
import { PrismaClientService } from '@nx-for-code-gen/db';

@Controller()
export class AppController {
  constructor(private readonly db: PrismaClientService) {}

  @Get()
  getData() {
    return this.db.user.findFirst();
  }
}
