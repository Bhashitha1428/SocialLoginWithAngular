import { Component } from '@angular/core';
 
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
 
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'socialLogin';
  user:any

  constructor(private authService: AuthService) {
    console.log(this.user);
    console.log("AAAAAAAAAAAa")
   }
 
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData=>{
      this.user=userData;
      console.log(this.user);
    }))
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((userData)=>{
      this.user=userData;
      console.log(this.user);
    })
  } 

  signOut(): void {
    this.authService.signOut();
  }

  
}
