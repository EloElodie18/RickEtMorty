import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decompte',
  templateUrl: './decompte.component.html',
  styleUrl: './decompte.component.css'
})
export class DecompteComponent implements OnInit {

  time: number = 3;

  constructor() {}

  ngOnInit(): void {
    setInterval(() => { if (this.time > 0) this.time--;}, 1000);
  }

}
