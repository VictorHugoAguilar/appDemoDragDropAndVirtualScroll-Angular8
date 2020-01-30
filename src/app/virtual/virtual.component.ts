import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport, { static: true }) viewPort: CdkVirtualScrollViewport;

  personas = Array(5000).fill(0);

  constructor() { }

  ngOnInit() {
    console.log(this.personas);
  }

  irComienzo() {
    this.viewPort.scrollToIndex(0);

  }

  irCentro() {
    this.viewPort.scrollToIndex(this.personas.length / 2);
  }

  irFinal() {
    this.viewPort.scrollToIndex(this.personas.length);
  }

}
