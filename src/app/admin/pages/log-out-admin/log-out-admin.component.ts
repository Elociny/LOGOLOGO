import { Component } from '@angular/core';
import { AdminLayoutComponent } from "../../components/admin-layout/admin-layout.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-log-out-admin',
  imports: [AdminLayoutComponent, RouterModule],
  templateUrl: './log-out-admin.component.html',
  styleUrl: './log-out-admin.component.css'
})
export class LogOutAdminComponent {

}
