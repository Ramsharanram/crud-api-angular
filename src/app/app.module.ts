import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlipcartComponent } from './flipcart/flipcart.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { INRPipe } from './flipcart/pipe';
import { TestPipe } from './flipcart/testpipe';
import { highlightButtonDirective } from './flipcart/test.directive';
import { PhoneNumberDirective } from './flipcart/number.directive';
import { HoverDirective } from './flipcart/hover.directive';
import { AddeditformComponent } from './addeditform/addeditform.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { CustonTextBoxComponent } from './custon-text-box/custon-text-box.component';

@NgModule({
  declarations: [
    AppComponent,
    FlipcartComponent,
    INRPipe,
    TestPipe,
    highlightButtonDirective,
    PhoneNumberDirective,
    HoverDirective,
    AddeditformComponent,
    CustomButtonComponent,
    CustonTextBoxComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
