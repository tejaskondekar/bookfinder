import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-homee',
  templateUrl: './homee.component.html',
  styleUrls: ['./homee.component.css']
})
export class HomeeComponent implements OnInit {

  public bookName = '';
  public booksList = [];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
 
  callfun(){
    console.log(this.bookName);
    const output = this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${this.bookName}`)

    output.subscribe((res)=>{
      console.log(res);
      this.booksList=res['items'];
    })
    
  }
}
