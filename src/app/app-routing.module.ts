import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: ':id', component: AppComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // 👈 Esto es clave
      anchorScrolling: 'enabled',           // (opcional) para soportar #anclas
      scrollOffset: [0, 0]                  // (opcional) offset por headers fijos
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
