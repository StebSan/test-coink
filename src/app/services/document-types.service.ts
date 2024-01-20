import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IDocumentTypes } from '../interfaces/documentTypes.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DocumentTypesService {

  private urlApi = environment.urlApi

  constructor(
    private httpClient: HttpClient
  ) { }

  byActives(){
    return this.httpClient.get<IDocumentTypes[]>(`${this.urlApi}/documentTypes?apiKey=030106`)
  }
}
