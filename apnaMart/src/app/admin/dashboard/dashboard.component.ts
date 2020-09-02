import { Component, OnInit, ViewChild } from '@angular/core';
import { ComServic } from 'src/app/services/com-servic.service';
import { MobParts } from 'src/app/models/mob-parts';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: ['./dashboard.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private comServic: ComServic) {}
  mobPart: MobParts[]; // 10MB
  displayedColumns: string[] = [
    'img',
    'id',
    'name',
    'price',
    'description',
    'stock',
  ];
  dataSource = new MatTableDataSource(this.mobPart);

  ngOnInit() {
    this.comServic.getMobParts().subscribe((res) => (this.dataSource = res));
  }
}
