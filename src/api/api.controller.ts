import { Controller, Post, Body } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Post('start')
  async startInscription(@Body() data: any) {
    const response = await this.apiService.startInscription(data);
    return response;
  }

  @Post('status')
  async checkInscriptionStatus(@Body('token') token: string) {
    const response = await this.apiService.checkInscriptionStatus(token);
    return response;
  }
}
