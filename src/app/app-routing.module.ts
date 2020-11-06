import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './post/index/index.component';
import { ViewComponent } from './post/view/view.component';
import { CreateComponent } from './post/create/create.component';
import { EditComponent } from './post/edit/edit.component';
import { LoginComponent } from './post/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'users', redirectTo: 'users/index'},
  { path: 'users/index', component: IndexComponent },
  { path: 'users/:userid/view', component: ViewComponent },
  { path: 'users/create', component: CreateComponent },
  { path: 'users/:userid/edit', component: EditComponent } 
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
