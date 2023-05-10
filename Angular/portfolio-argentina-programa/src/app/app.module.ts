import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ImagenAPComponent } from './components/nav/components/imagen-ap/imagen-ap.component';
import { NombreComponent } from './components/nav/components/nombre/nombre.component';
import { RedesSocialesComponent } from './components/nav/components/redes-sociales/redes-sociales.component';
import { BotonInicioSesionComponent } from './components/nav/components/boton-inicio-sesion/boton-inicio-sesion.component';
import { FotoNombreTituloComponent } from './components/acerca-de/components/foto-nombre-titulo/foto-nombre-titulo.component';
import { AcercadeTextosComponent } from './components/acerca-de/components/acercade-textos/acercade-textos.component';
import { EducacionBloqueComponent } from './components/educacion/components/educacion-bloque/educacion-bloque.component';
import { HabilidadDuraComponent } from './components/habilidades/components/habilidad-dura/habilidad-dura.component';
import { HabilidadBlandaComponent } from './components/habilidades/components/habilidad-blanda/habilidad-blanda.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainSectionComponent,
    BannerComponent,
    AcercaDeComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    ImagenAPComponent,
    NombreComponent,
    RedesSocialesComponent,
    BotonInicioSesionComponent,
    FotoNombreTituloComponent,
    AcercadeTextosComponent,
    EducacionBloqueComponent,
    HabilidadDuraComponent,
    HabilidadBlandaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
