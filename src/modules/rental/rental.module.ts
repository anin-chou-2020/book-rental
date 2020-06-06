import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalComponent } from './components/rental/rental.component';
import { RentalListComponent } from './components/rental-list/rental-list.component';
import { RentalListItemComponent } from './components/rental-list-item/rental-list-item.component';
import { RentalRoutingModule } from './rental-routing.module';
import { RentalService } from './services/rental.service';
import { RentalDetailComponent } from './components/rental-detail/rental-detail.component';

@NgModule({
  declarations: [RentalComponent, RentalListComponent, RentalListItemComponent, RentalDetailComponent],
  imports: [CommonModule, RentalRoutingModule],
  providers: [RentalService]
})
export class RentalModule { }
