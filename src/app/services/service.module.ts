import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';


import {
  SettingsService,
  SidebarService,
  SharedService,
  UsuarioService,
  LoginGuardGuard,
  AdminGuard,
  SubirArchivoService,
  FollowService,
  InmuebleService,
  ClienteService,
  InmuebleitoService,
  Usuario2Service,
  VerificaTokenGuard
 } from './service.index';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService,
    SidebarService,
    SharedService,
    UsuarioService,
    LoginGuardGuard,
    AdminGuard,
    SubirArchivoService,
    ModalUploadService,
    FollowService,
    InmuebleService,
    ClienteService,
    InmuebleitoService,
    Usuario2Service,
    VerificaTokenGuard
  ],
  declarations: []
})
export class ServiceModule { }