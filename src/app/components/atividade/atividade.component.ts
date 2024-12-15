import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-atividade',
  standalone: true,
  imports: [SharedModule],
  providers: [MessageService],
  templateUrl: './atividade.component.html',
  styleUrl: './atividade.component.scss'
})
export class AtividadeComponent {
  date: Date | undefined;
  atividades: any;

  atividadeForm!: FormGroup;

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private messageService: MessageService
  ){}


  ngOnInit() {
    this.atividadeForm = this.fb.group({
      caloriasQueimadas: [null, [Validators.required]],
      passos: [null, [Validators.required]],
      distancia: [null, [Validators.required]],
      data: [null, [Validators.required]],
    })

    this.listarAtividades();
  }

  listarAtividades(){
    this.apiService.listarAtividade().subscribe(resultado =>{
      this.atividades = resultado;
    });
  }

  enviarForm(){
    this.apiService.postarAtividade(this.atividadeForm.value).subscribe(
      { next: () => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Treino cadastrado!' });
        this.limparForm();
        this.listarAtividades();
      },
        error: () => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Não foi possível cadastrar' })
      })
  }

  limparForm(): void {
    this.atividadeForm.reset();
  }

}
