import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatwindowComponent } from './component/chatwindow/chatwindow.component';

const routes: Routes = [
  {path: 'chatbot' , component: ChatwindowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
