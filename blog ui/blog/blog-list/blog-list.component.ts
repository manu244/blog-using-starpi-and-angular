import { Component, OnInit } from '@angular/core';
import { BlogService, ROUTE_PATH } from '../blog.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  path:string=environment.strapiPath;
  jsonData:any=[];
  searchControl = new FormControl();
  filteredData: Observable<string[]>;
  constructor(
    private blogService:BlogService,
    private router:Router
  ) { }

  ngOnInit() {
    this.getBogList();
    this.filteredData = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  getBogList(){
    this.blogService.getBlog().subscribe(res=>{
      if(res){
        this.jsonData=res;
        console.log(res)
      }
    },error=>{
      console.log(error);
    })
  }

  private _filter(value: string): string[] {
    if (typeof value === "string") {
      return this.jsonData.filter(data =>
        data.title.toLowerCase().includes(value.toLowerCase())
      );
    }
  }

  public displayWithObject(option): string {
    return option ? option.title : option;
  }

  searchData(){
    this.router.navigate([ROUTE_PATH.BLOG_DETAILS],{queryParams:{id:this.searchControl.value.id}});
  }
}
