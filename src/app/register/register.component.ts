import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private userid: string;
  private emailid: string;
  private password: string;
  private cPassword: string;

  constructor() { }

  ngOnInit() {
  }

  registerUser() {
    //alert("clicked Register button. you entered userid: "+this.userid+", emailId: "+this.emailid);
    if(this.userid == null || this.emailid == null || this.password == null || this.cPassword == null){
      alert("anni fields enter cheyyu bujji");
      return;
    }
    if(this.password != null && this.password==this.cPassword){
      alert("good ra bujji. nuvvu register ayyavu ippudu");
      localStorage.setItem("[password]"+this.userid,this.password);
      localStorage.setItem("[email]"+this.userid,this.emailid);
      localStorage.setItem(this.password,this.userid);
    } else {
      alert("password and confirm password same undali ra");
    }
    
  }

}
