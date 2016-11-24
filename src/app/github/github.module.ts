import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { GithubComponent}   from './';

@NgModule({
  imports: [ CommonModule ],
  exports: [ GithubComponent ],
  declarations: [ GithubComponent ],
  providers: [],
})
export class GithubModule { }
