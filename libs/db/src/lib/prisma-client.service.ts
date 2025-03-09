import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@nx-for-code-gen/prisma/api-db';

@Injectable()
export class PrismaClientService extends PrismaClient {}
