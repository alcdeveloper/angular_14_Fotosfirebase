import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { APP_ROUTES } from './app.routes';
//Services
import {CargaImangenesService } from './services/carga-imangenes.service';

//FireBase
import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';



//Componentes
import { AppComponent } from './app.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { CargaComponent } from './components/carga/carga.component';
//Directivas
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';


@NgModule({
  declarations: [
    AppComponent,
    FotosComponent,
    CargaComponent,
    NgDropFilesDirective
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule // imports firebase/auth, only needed for auth features,
  ],
  providers: [CargaImangenesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
