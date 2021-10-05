import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html'
})
export class TitleComponent implements OnInit {

  @Input() titulo: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
