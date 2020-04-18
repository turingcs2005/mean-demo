import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'setup', loadChildren: () => import('./modules/setup/setup.module').then(m => m.SetupModule) },
  { path: 'crud', loadChildren: () => import('./modules/crud/crud.module').then(m => m.CrudModule) },
  { path: 'upload', loadChildren: () => import('./modules/upload/upload.module').then(m => m.UploadModule) },
  { path: 'download', loadChildren: () => import('./modules/download/download.module').then(m => m.DownloadModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
