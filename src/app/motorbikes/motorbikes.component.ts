import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Motorbike } from '../_model/motorbike';
import { MotorbikesService } from '../_service/motorbikes.service';

@Component({
  selector: 'app-motorbikes',
  templateUrl: './motorbikes.component.html',
  styleUrls: ['./motorbikes.component.css']
})
export class MotorbikesComponent implements OnInit {

	categoryId: string;
	motorbikes: Motorbike[];

  constructor(private route: ActivatedRoute, private motorbikesService: MotorbikesService) { }

  ngOnInit() {
	  this.categoryId = this.route.snapshot.paramMap.get('categoryId');

	  this.getMotorbikes(this.categoryId);
  }

  getMotorbikes(categoryId: string): void {
	  this.motorbikesService.getMotorbikes(categoryId)
		  .subscribe(motorbikes => this.motorbikes = motorbikes);
  }

}
