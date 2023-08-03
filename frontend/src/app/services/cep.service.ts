import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cep } from '../models/cep';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private httpClient: HttpClient) { }

  getCepData(cep: string): Observable<Cep> {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    return this.httpClient.get<Cep>(url);
  }
}
