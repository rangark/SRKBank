import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  private userid: string;
  private email: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { 

  }

  ngOnInit() {
    this.userid = localStorage.getItem("userid");
    this.email = localStorage.getItem("email");
    console.log("accounts page lo.. userid:"+this.userid+", email:"+this.email);
    // this.email = localStorage.getItem("[email]"+this.userid);

    this.showAccountsSummary();
  }

  showAccountsSummary(){
    //alert("Welcome, dear "+this.userid+" ("+this.email+")");
    // this.activatedRoute.queryParams.subscribe(
    //   x=>{this.userid= x['userid']}
    // );
    alert("accounts page lo.. login page nunchi vachina value... userid="+this.userid);
  }

}
