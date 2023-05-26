import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'; // Corrected import

import { ApiController } from './api.controller';
import { ApiService } from './api.service';

@Module({
  imports: [HttpModule],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
