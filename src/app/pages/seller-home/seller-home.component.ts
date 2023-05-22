import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss']
})
export class SellerHomeComponent implements OnInit {


  constructor(private router: ActivatedRoute){}

  ngOnInit(): void {
    let sellerId = this.router.snapshot.paramMap.get('id')
  }

  submit(data:any){
    console.warn(data);

  }
}
