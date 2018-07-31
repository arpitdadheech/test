import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  changePassword : boolean = false;
	forgotPassword : boolean = false;
	unlockAccount : boolean = false;
	passwordHelp : boolean = false;
	loading: boolean = false;
	useDefault: boolean = true;
	showDefaultIcons: boolean = true;
  apiUrl = location.href.substr(0,location.href.indexOf("#"));

	constructor(private router:Router, private activatedRoute : ActivatedRoute) {
		router.events.subscribe((val) => {
        	this.ngOnInit();
		});

		this.activatedRoute.url.subscribe(()=>{
			// this.getHeader();
		})
	}

	ngOnInit() {
		var text = window.location.href;
		var parts = text.split('/');
		var loc = parts.pop();
		if(loc == 'help') {
			this.changeIcon('passwordHelp');
		} else {
			this.changeIcon(loc);
		}
		// this.commonService.getNavChangeEmitter().subscribe(menuName => this.changeIcon(menuName));
		// //check whether page is Admin Console or Ldap Portal
		// if(loc.includes('adminConsole')) {
		// 	this.showDefaultIcons = false;
		// } else {
		// 	this.showDefaultIcons = true;
		// }
	}

	

	changeIcon(menuName) {
		// this.commonService.changeIcon(menuName);
		// this.changePassword = this.commonService.changePassword;
		// this.forgotPassword = this.commonService.forgotPassword;
		// this.unlockAccount = this.commonService.unlockAccount;
		// this.passwordHelp = this.commonService.passwordHelp;
	}

}
