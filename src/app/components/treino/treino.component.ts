import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-treino',
  standalone: true,
  imports: [SharedModule],
  providers: [MessageService],
  templateUrl: './treino.component.html',
  styleUrl: './treino.component.scss'
})
export class TreinoComponent {

  date: Date | undefined;
  treinos: any;

  treinoForm!: FormGroup;

  tiposDeTreinos: any[] = [
    "Artes marciais",
    "Basquete ",
    "Cardio",
    "Corrida",
    "Ciclismo",
    "Crossfit",
    "Caminhada ",
    "Dança",
    "Desportos aquáticos",
    "Esteira",
    "Futebol",
    "Ginástica",
    "Musculação",
    "Pilates",
    "Treinamento funcional",
    "Yoga"
  ]

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private messageService: MessageService){}

    ngOnInit() {
      this.treinoForm = this.fb.group({
        tipo: [null, [Validators.required]],
        duracao: [null, [Validators.required]],
        data: [null, [Validators.required]],
        caloriasQueimadas: [null, [Validators.required]],
      })

      this.listarTreinos();
    }

    enviarForm(){
      this.apiService.postarTreino(this.treinoForm.value).subscribe(
        { next: () => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Treino cadastrado!' });
          this.limparForm();
          this.listarTreinos();
        },
          error: () => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Não foi possível cadastrar' })
        })
    }



    limparForm(): void {
      this.treinoForm.reset();
    }

    listarTreinos(){
      this.apiService.listarTreinos().subscribe(resultado =>{
        this.treinos = resultado;
      });
    }


}
