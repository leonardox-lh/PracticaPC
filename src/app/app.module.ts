import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {LayoutModule} from "@angular/cdk/layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import {NgOptimizedImage} from "@angular/common";
import {MatListModule} from "@angular/material/list";
import {LogoApiService} from "./shared/services/logo-api.service";
import { ToolbarContentComponent } from './TicketMaster/components/toolbar-content/toolbar-content.component';
import { NavComponent } from './TicketMaster/components/nav/nav.component';
import { FooterContentComponent } from './TicketMaster/components/footer-content/footer-content.component';
import { MainContentComponent } from './TicketMaster/components/main-content/main-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarContentComponent,
    NavComponent,
    FooterContentComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    NgOptimizedImage
  ],
  providers: [LogoApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
