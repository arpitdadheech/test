import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {
    username: '',
    password: ''
  };
  constructor(private router: Router) { 
    
  }

  ngOnInit() {
    var modal = document.getElementById('id01');
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
  }

  onSubmit(){
    if(this.model.username == "admin" && this.model.password == "admin"){
      this.router.navigate(['/dashboard']);
    }
  }
}
