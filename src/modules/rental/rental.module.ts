import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// import { NgPipesModule } from 'ngx-pipes';

import { RentalRoutingModule } from './rental-routing.module';

import { RentalService } from './services/rental.service';

import { RentalComponent } from './components/rental/rental.component';
import { RentalListComponent } from './components/rental-list/rental-list.component';
import { RentalListItemComponent } from './components/rental-list-item/rental-list-item.component';
import { RentalDetailComponent } from './components/rental-detail/rental-detail.component';
import { UcwordsPipe } from './pipes/ucwords.pipe';
import { UpperPipe } from './pipes/upper.pipe';
@NgModule({
  declarations: [RentalComponent, RentalListComponent, RentalListItemComponent, RentalDetailComponent, UcwordsPipe, UpperPipe],
  imports: [CommonModule, HttpClientModule, RentalRoutingModule],
  providers: [RentalService]
})
export class RentalModule { }
