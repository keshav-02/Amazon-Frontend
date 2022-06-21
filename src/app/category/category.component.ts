import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category:any;

  constructor(private service: CategoryService) { }

  ngOnInit(): void {
    this.service.getCategory().subscribe(data=> {
      this.category=data;
    });
  }

}
