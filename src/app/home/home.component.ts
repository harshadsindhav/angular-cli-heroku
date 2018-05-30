import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() returnUrl : string;


  constructor(private router : Router, private routes : ActivatedRoute) {

    this.routes.queryParams.subscribe((params : Params) => {
        if(params['return_url'] != undefined) {
              this.returnUrl = params['return_url'];
        }
    });
  }

  ngOnInit() {
  }

  submitOrder() {
    console.log("Redirecting to " + this.returnUrl);
    window.location.href = this.returnUrl;
}

}
