import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private userid: string;
  private password: string;
  private failedLogins: number; 

  constructor(private router:Router, private activatedRoute: ActivatedRoute) { 

  }

  ngOnInit() {
    this.printLocalStorage();
  }

  validateLogin(){
    //alert("clicked Login button, you typed userid: "+this.userid+", and password: "+this.password);
    let cachePassword = localStorage.getItem("[password]"+this.userid);
    let cacheEmail = localStorage.getItem("[email]"+this.userid);

    if(cachePassword == this.password){
      alert("login ayyavura bujji");
      localStorage.setItem("userid",this.userid);
      localStorage.setItem("email",localStorage.getItem("[email]"+this.userid));
      //{queryParams:{userid: this.userid}};
      this.router.navigate(["/accounts"]);
    } else {
      alert("login marchi poyava bujji? malli try cheyyi");
      //localStorage.setItem("[failedLogins]"+this.userid,"");
    }

  }

  printLocalStorage(){
    for(var i=0; i<localStorage.length; i++){
      let tmpUsrid=localStorage.key(i);
      console.log(tmpUsrid+"..."+localStorage.getItem(tmpUsrid));
    }

  }

  // function op(){
  //   if(app.option.length > 0){
  //     return <p>"Here are your options"</p>
  //   }
  //   else{
  //     return <p>"No options"</p>
  //   }
  // }
  //   op1() -> { (app.option.length > 0)?"Here are your options":"No options"; } 


}
