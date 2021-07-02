import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingComponent } from './component/setting/setting.component';
import { WeatherHomeComponent } from './component/weather-home/weather-home.component';


const routes: Routes = [
  { path: '', redirectTo :'/weather', pathMatch : 'full'  },
  { path: 'weather', component: WeatherHomeComponent },
  { path: 'setting', component: SettingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [WeatherHomeComponent, SettingComponent]
