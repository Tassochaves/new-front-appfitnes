import { Component, LOCALE_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { MenuItem } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'new-front-fitnes';
  sidebarVisible: boolean = false;

  items: MenuItem[] | undefined;

  constructor(private primengConfig: PrimeNGConfig) {}
    ngOnInit() {
      this.primengConfig.setTranslation({
        accept: 'Accept',
        reject: 'Cancel',
    });
    }
}
