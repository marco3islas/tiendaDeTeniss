import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import {FormsModule} from '@angular/forms';
import { DetailsComponent } from './components/details/details.component';
import { OpinionesComponent } from './components/opiniones/opiniones.component';
import { OpinionCardComponent } from './components/opinion-card/opinion-card.component';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    DetailsComponent,
    OpinionesComponent,
    OpinionCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainComponent
  ]
})
export class StoreModule { }
