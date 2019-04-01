import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import {MasterComponent} from '../master/master.component';
import {RepoComponent} from '../repo/repo.component';

const routes:Routes =[

  {path:'',redirectTo: 'master',pathMatch:'full'},
  {path:'master', component:MasterComponent},
  {path:'repo', component:RepoComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ROuterModule.forRoot(routes)
  ],
  exports:[RoterModule],
  declarations:[]
})
export class RoutingModule { }
