import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = "http://localhost:8080/api";

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  httpCliente = inject(HttpClient);

  constructor() {}

  //endpoint atividade
  postarAtividade(atividadeDto: any): Observable<any>{
    return this.httpCliente.post(API_URL + "/atividade", atividadeDto);
  }

  listarAtividade(): Observable<any>{
    return this.httpCliente.get(API_URL + "/obterAtividades");
  }

  //endpoint meta
  postarMeta(metaDto: any): Observable<any>{
    return this.httpCliente.post(API_URL + "/meta", metaDto);
  }

  listarMetas(): Observable<any>{
    return this.httpCliente.get(API_URL + "/metas");
  }

  atualizarStatusMeta(id: number): Observable<any>{
    return this.httpCliente.get(API_URL + "/atualizar-status/" + id);
  }

  //endpoint treino
  postarTreino(treinoDto: any): Observable<any>{
    return this.httpCliente.post(API_URL + "/treino", treinoDto);
  }

  listarTreinos(): Observable<any>{
    return this.httpCliente.get(API_URL + "/treinos");
  }

  //endpoint dashboard
  obterEstatisticas(): Observable<any>{
    return this.httpCliente.get(API_URL + "/estatisticas");
  }

  listarDadosGrafico(): Observable<any>{
    return this.httpCliente.get(API_URL + "/graficos");
  }
}
