import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    {{response.title}} {{ response.owner?.name?.firstName }}
    <br/>
    {{response.body | summary:30 }}
  `
})
export class AppComponent {
  response = {
    title: "Some nice title",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    owner: null
  }
}
