import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'My 1rrrrrst my-app';

  /*1st Data binding exercise -->app.component.html*/
  /*
  onClickMe(textoEnviado) {
    alert(textoEnviado);
  }

  clickMessage = '';
  clicks = 1;
  onClickMe2(event: any) {
    let evMsg = event ? ' Event target is ' + event.target.tagName : '';
    this.clickMessage = (`Click ${this.clicks++}. ${evMsg}`);
  }
  */  
}
