import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
  <h2>Home</h2> 
  <p>{{message}}</p>
  `
})
export class TestComponent { 
  message = "this is a message for the home.";

  constructor()
  {
    console.log("test Component");
  }
}