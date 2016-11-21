import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  template: `
    <form>
      <div class="form-group">
        <label for="firstName">FirstName</label>
        <input id="firstName" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label for="comment">Comment</label>
        <textarea id="comment" cols="30" rows="10" class="form-control">
        </textarea>
      </div>
      <button class="btn btn-primary" type="submit">Submit</button>
    </form>
  `
})
export class ContactFormComponent {
  constructor() { }


}
