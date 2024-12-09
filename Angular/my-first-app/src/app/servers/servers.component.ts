import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.less']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was Created!';
  serverName = 'Testserver';
  serverCreated = false;
  constructor() { 
	setTimeout(() => {
	  this.allowNewServer = true;
	}, 2000);
  } 
  ngOnInit(): void {
  }

  onCreateServer() {
  	this.serverCreated = true;
  	this.serverCreationStatus = "Server was Created";	
  }

  onUpdateServerName(event: Event) {
  	this.serverName = (<HTMLInputElement>event.target).value;
  }
 
}
