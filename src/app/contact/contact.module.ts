import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { ContactFormComponent }   from './';

@NgModule({
  imports: [ FormsModule, CommonModule ],
  exports: [],
  declarations: [ContactFormComponent],
  providers: [],
})
export class ContactModule { }
