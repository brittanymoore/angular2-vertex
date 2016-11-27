import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToDoModule } from './todo/todo.module';
import { MockModule } from './mock/mock.module';
import { AppRoutingModule, routedComponents } from './app.routing.module';

@NgModule({
    imports: [ 
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ToDoModule,
        MockModule
    ],
    declarations: [
        AppComponent,
        routedComponents
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }