import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'personajes',
    loadChildren: () =>
      import('./pages/personajes/personajes.module').then(
        (m) => m.PersonajesModule
      ),
  },
  { path: 'estudiantes', loadChildren: () => import('./pages/estudiante/estudiante.module').then(m => m.EstudianteModule) },
  { path: 'profesores', loadChildren: () => import('./pages/profesores/profesores.module').then(m => m.ProfesoresModule) },
  { path: '**', redirectTo: 'personajes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
