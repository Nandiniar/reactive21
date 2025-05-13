import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactice21';
  name=new FormControl('Ram'); // aise karne se default value aayege bracket ke andar likhne se
  password=new FormControl(123);
  displayvalue(){
    console.log(this.name.value);
    console.log(this.password.value);
  }
  setValues(){
    this.name.setValue('ABC');
    this.password.setValue(12345);

  }
}
