import { DatePipe } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { CategoryScale, Chart } from 'chart.js/auto';
import { SharedModule } from '../../shared/shared.module';

Chart.register(CategoryScale);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SharedModule],
  providers: [DatePipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  dadosEstatistica: any;

  treinos: any;
  atividades: any;

  @ViewChild('graficoDeLinhaTreinos')
  private graficoDeLinhaTreinoRef!: ElementRef;

  @ViewChild('graficoDeLinhaAtividades')
  private graficoDeLinhaAtividadeRef!: ElementRef;

  constructor(
    private apiService: ApiService,
    private datePipe: DatePipe){}

  ngOnInit(): void {
    this.obterEstatisticas();
    this.obterDadosGrafico();
  }

  ngAfterViewInit(): void {
    if(this.treinos && this.atividades){
      this.criarGraficoDeLinha();
    }
  }

  obterEstatisticas(){
    this.apiService.obterEstatisticas().subscribe(resultado =>{
      this.dadosEstatistica = resultado;
    });
  }

  obterDadosGrafico(){
    this.apiService.listarDadosGrafico().subscribe(resultado => {
      this.treinos = resultado.treinos;
      this.atividades = resultado.atividades;

      if(this.graficoDeLinhaTreinoRef || this.graficoDeLinhaAtividadeRef){
        this.criarGraficoDeLinha();
      }
    });
  }

  criarGraficoDeLinha(){
    const treinoContext = this.graficoDeLinhaTreinoRef.nativeElement.getContext('2d');
    const atividadeContext = this.graficoDeLinhaAtividadeRef.nativeElement.getContext('2d');

    new Chart(treinoContext, {
      type: 'line',
      data: {
        labels: this.treinos.map((dados: {data: any;}) => this.datePipe.transform(dados.data, 'dd/MM')),
        datasets: [
          {
          label: 'Calorias queimadas',
          data: this.treinos.map((dados: {caloriasQueimadas: any;}) => dados.caloriasQueimadas),
          fill: false,
            borderWidth: 1,
            backgroundColor: 'rgba(233, 117, 9, 0.6)',
            borderColor: 'rgba(255, 123, 0, 0.99)',
        },
        {
          label: 'Duração',
          data: this.treinos.map((dados: {duracao: any;}) => dados.duracao),
          fill: false,
            borderWidth: 1,
            backgroundColor: 'rgba(10, 181, 238, 0.6)',
            borderColor: 'rgb(0, 169, 236)',
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    new Chart(atividadeContext, {
      type: 'line',
      data: {
        labels: this.atividades.map((dados: {data: any;}) => this.datePipe.transform(dados.data, 'dd/MM')),
        datasets: [
          {
          label: 'Calorias queimadas',
          data: this.atividades.map((dados: {caloriasQueimadas: any;}) => dados.caloriasQueimadas),
          fill: false,
            borderWidth: 1,
            backgroundColor: 'rgba(233, 117, 9, 0.6)',
            borderColor: 'rgba(255, 123, 0, 0.99)',
        },
        {
          label: 'Passos',
          data: this.atividades.map((dados: {passos: any;}) => dados.passos),
          fill: false,
            borderWidth: 1,
            backgroundColor: 'rgba(80, 3, 202, 0.6)',
            borderColor: 'rgb(102, 7, 255)',
        },
        {
          label: 'Distancia',
          data: this.atividades.map((dados: {distancia: any;}) => dados.distancia),
          fill: false,
            borderWidth: 1,
            backgroundColor: 'rgb(3, 60, 218)',
            borderColor: 'rgb(33, 91, 252)',
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
