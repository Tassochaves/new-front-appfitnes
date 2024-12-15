import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-meta',
  standalone: true,
  imports: [SharedModule],
  providers: [MessageService],
  templateUrl: './meta.component.html',
  styleUrl: './meta.component.scss'
})
export class MetaComponent {

  dataInicio: Date | undefined;
  dataFim: Date | undefined;
  metas: any;

  metaForm!: FormGroup;

  constructor(
    private apiService: ApiService,
      private fb: FormBuilder,
      private messageService: MessageService){}

    ngOnInit() {
      this.metaForm = this.fb.group({
        descricao: [null, [Validators.required]],
        dataInicio: [null, [Validators.required]],
        dataFim: [null, [Validators.required]]
      })

      this.listarMetas();
    }

    enviarForm(){
      this.apiService.postarMeta(this.metaForm.value).subscribe(
        { next: () => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Meta cadastrada!' });
          this.metaForm.reset();
          this.listarMetas();
        },
          error: () => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Não foi possível cadastrar meta!' })
        })
    }

    listarMetas(){
      this.apiService.listarMetas().subscribe(resultado =>{
        this.metas = resultado;
      });
    }

    atualizarStatus(id: number){
      this.apiService.atualizarStatusMeta(id).subscribe(
      { next: () => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Meta concluida!' });
        this.listarMetas();
      },
      error: () => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Erro ao concluir meta!' })
      })
    }
}
