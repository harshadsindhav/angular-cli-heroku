import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  returnUrl: string;
  decision_code: string;
  transaction_id: string;
  currency: string;
  amount: string;
  error_mesg: string;

  constructor(private router : Router, private routes : ActivatedRoute) {

    this.routes.queryParams.subscribe((params : Params) => {
        if(params['return_url'] != undefined) {
              this.returnUrl = params['return_url'];
              this.decision_code = params['decision_code'];
              this.transaction_id = params['transaction_id'];
              this.currency = params['currency'];
              this.amount = params['amount'];
              this.error_mesg = params['error_mesg'];
        }
    });
  }

  ngOnInit() {
  }

  submitOrder() {
    console.log("Redirecting to " + this.returnUrl);
    window.location.href = this.returnUrl + "&decision_code=" + this.decision_code + "&transaction_id=" + this.transaction_id + "&currency=" + this.currency + "&amount=" + this.amount + "&error_mesg=" + this.error_mesg;
}

}
