import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from '../../services/rental.service';
import { Rental } from '../../models/rental.model';
@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {

  rental: Rental;

  constructor(private activatedRoute: ActivatedRoute, private rentalService: RentalService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.getRentalById(params.rentalId);
      }
    );
  }

  getRentalById(rentalId: string) {
    this.rentalService.getRentalById(rentalId).subscribe(
      (rental: Rental) => {
        this.rental = rental;
      }
    );
  }

}
