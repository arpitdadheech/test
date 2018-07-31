import { Component, OnInit } from '@angular/core';
import { SimpleNotificationsModule } from 'angular2-notifications';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private notificationsService: SimpleNotificationsModule) { }

  ngOnInit() {
  }
  saveChanges(){
    alert("Item Saved");
  }
}
