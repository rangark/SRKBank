import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-accounts',
  // templateUrl: './accounts.component.html',
  // styleUrls: ['./accounts.component.css']
  // template: `
  //   <div class="card card-block" *ngFor="let account of accountsList">
  //     <h6 class="card-title">{{account.acctNum}}</h6>
  //     <p class="card-class">{{account.acctBal}}</p>
  //   </div>
  // `
  template: `
    <div>
    <table border="1" *ngIf= "accountsList" width="100%">
      <thead>
        <th>S.No</th>
        <th>Account Number</th>
        <th>Account Type</th>
        <th>Account Balance</th>
        <th>Remarks</th>
      </thead>
      <div *ngFor ="let acct of accountsList; index as i; first as isFirstItem; last as isLastItem; even as isEvenItem; odd as isOddItem">
      <tr width="100%">
          <td>{{i}}</td>
          <td>{{acct.acctNum}}</td>
          <td>{{acct.acctType | uppercase}}</td>
          <td>{{acct.acctBal}}</td>
          <td>
            <span *ngIf="isFirstItem">Frist Account</span>
            <span *ngIf="isLastItem">Last Account</span>
            // <span *ngIf="isEvenItem">Even result</span>
            // <span *ngIf="isOddItem">Odd result</span>
          </td>
          </tr>
          </div>
      </table>
    </div>
  `

})
export class AccountsComponent implements OnInit {
  private userid: string;
  private email: string;
  private datafromExtrnalSource :any;

  private accountsList = [
    {userid: "Ranga", acctNum: "11111111111", acctType: "Savings Account", acctBal: 10.00},
    {userid: "Ranga", acctNum: "22222222222", acctType: "Savings Account", acctBal: 20.00},
    {userid: "Ranga", acctNum: "33333333333", acctType: "Savings Account", acctBal: 30.00},
    {userid: "Ranga", acctNum: "44444444444", acctType: "Savings Account", acctBal: 40.00}
  ];
    
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private httpclient : HttpClient) { 

  }

// get  url  + headrers
// post url + body create + headrers
// put url+ body  update + headrers
// delete url + url params + headrers

  ngOnInit() {  
    // observable design pattern --> rxjs api
    this.httpclient.get("https://jsonplaceholder.typicode.com/todos").subscribe(x=>{
      console.log("data from web service " + JSON.stringify(x));
      this.datafromExtrnalSource = x;
    });
    this.userid = localStorage.getItem("userid");
    this.email = localStorage.getItem("email");
   // console.log("accounts page lo.. userid:"+this.userid+", email:"+this.email);
    // this.email = localStorage.getItem("[email]"+this.userid);
    this.showAccountsSummary();
  }

  showAccountsSummary(){
    //alert("Welcome, dear "+this.userid+" ("+this.email+")");
    // this.activatedRoute.queryParams.subscribe(
    //   x=>{this.userid= x['userid']}
    // );
   // alert("accounts page lo.. login page nunchi vachina value... userid="+this.userid);
  }

}
