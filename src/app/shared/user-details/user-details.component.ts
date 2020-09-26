import { Component, OnChanges, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() userFirstName: any;
  @Input() userLastName: string;
  @Input() userStatus: string;
  @Input() messageRead: string;

  
  public firstChar: string;
  public userColor: string;
  public userBg:string;

  ngOnInit(): void {

      this.firstChar = this.userFirstName[0];

  } // end ngOnInit


  // handling the click



}
