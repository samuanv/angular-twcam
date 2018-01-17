import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { MyTravelsService } from './my-travels.service';
import { UserService } from '../../../shared/services/user.service';
import { Book } from '../../../shared/interfaces/book';

@Component({
  selector: 'my-travels',
  templateUrl: './my-travels.html',
  styleUrls: ['./my-travels.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MyTravels implements OnInit {
  public travels: Book[];
  @ViewChild('myTable') table: any;

  constructor(private service: MyTravelsService, private userService: UserService) {
  }

  ngOnInit() {
    this.service.getTravels(this.userService.getEmail()).subscribe(data => {
      this.travels = data;
    });
  }
  toggleExpandRow(row) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }
  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }
}
