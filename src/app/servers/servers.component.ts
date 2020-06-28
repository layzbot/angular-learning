import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers = ['server1', 'server2'];
  serverName = '';
  serverCreationMessage = '';
  serverCount = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.servers.push(this.serverName);
    this.serverCount++;
    this.serverCreationMessage = `Server ${this.serverCount} Created`;
    console.table(this);
  }
}
