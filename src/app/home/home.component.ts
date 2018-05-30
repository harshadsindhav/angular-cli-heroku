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
        if(params['returnUrl'] != undefined) {
              this.returnUrl = params['returnUrl'];
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
