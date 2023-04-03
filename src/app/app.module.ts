import { AlumnosComponent } from './alumnos/alumnos.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ContentComponent } from './shared/component/content/content.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { SidebarComponent } from './shared/component/sidebar/sidebar.component';
import { TopbarComponent } from './shared/component/topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    ContentComponent,
    AlumnosComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
