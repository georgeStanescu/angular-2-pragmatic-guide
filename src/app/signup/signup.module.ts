import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SignupFormComponent } from "./";

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [
    SignupFormComponent
  ],
  exports: [
    SignupFormComponent
  ],
  providers: []
})
export class SignupModule {
}
