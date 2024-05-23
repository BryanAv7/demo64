import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(HttpClientModule), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"demo64progra","appId":"1:789618071591:web:0ac40e333c21fd50d5d602","storageBucket":"demo64progra.appspot.com","apiKey":"AIzaSyAy8yds_SpCSmKo-8yAeh2smFySiLyDyGc","authDomain":"demo64progra.firebaseapp.com","messagingSenderId":"789618071591"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
