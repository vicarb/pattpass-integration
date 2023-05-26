import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ApiService {
  constructor(private httpService: HttpService) {}

  async startInscription(data: any): Promise<AxiosResponse> {
    const serviceId = Math.floor(Math.random() * (9999999 - 1000000) + 1000000);
    const requestPayload = {
      ...data,
      serviceId,
      url: "http://misitio.cl/finalizar_suscripcion",
      finalUrl: "http://misitio.cl/voucher",
      commerceCode: "28299257",
      correoComercio: "comercio@test.cl",
      nombrePatPass: "Help - 8050014"
    };

    console.log('Request payload:', requestPayload); // log the request data

    const url = 'https://pagoautomaticocontarjetasint.transbank.cl/restpatpass/v1/services/patInscription';
    const headers = {
      Commercecode: '28299257',
      Authorization: 'cxxXQgGD9vrVe4M41FIt',
      'Content-Type': 'application/json',
    };

    const response = await this.httpService.post(url, requestPayload, { headers }).toPromise();
    return response.data;
  }

  async checkInscriptionStatus(token: string): Promise<AxiosResponse> {
    const url = 'https://pagoautomaticocontarjetasint.transbank.cl/restpatpass/v1/services/status';
    const headers = {
      Commercecode: '28299257',
      Authorization: 'cxxXQgGD9vrVe4M41FIt',
      'Content-Type': 'application/json',
    };
    const data = { token };

    console.log('Check inscription status with token:', token); // log the request data

    const response = await this.httpService.post(url, data, { headers }).toPromise();
    return response.data;
  }
}
