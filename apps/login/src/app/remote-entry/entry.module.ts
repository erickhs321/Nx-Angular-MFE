import { CardModule } from 'primeng/card';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import { RemoteEntryComponent } from './entry.component';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    CommonModule,
    CardModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FormsModule,

    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
