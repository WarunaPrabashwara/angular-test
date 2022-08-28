import { Component } from '@angular/core';

@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent {
    onFileSelected(event: any){
        console.log(event) ;
        console.log(event.target.files[0]) ;
    }
}