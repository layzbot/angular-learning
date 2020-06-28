import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { CompcomComponent } from './compcom/compcom.component';
import { CompcomchildComponent } from './compcomchild/compcomchild.component';
import { GamecontrolComponent } from './gamecontrol/gamecontrol.component';
import { OddcompComponent } from './gamecontrol/oddcomp/oddcomp.component';
import { EvencompComponent } from './gamecontrol/evencomp/evencomp.component';
import { ConsoleLoggerDirective } from './conloggerdirective/conlogger.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    DatabindingComponent,
    DirectivesComponent,
    CompcomComponent,
    CompcomchildComponent,
    GamecontrolComponent,
    OddcompComponent,
    EvencompComponent,
    ConsoleLoggerDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
