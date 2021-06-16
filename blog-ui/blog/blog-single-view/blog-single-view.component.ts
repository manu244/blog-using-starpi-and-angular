import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-blog-single-view',
  templateUrl: './blog-single-view.component.html',
  styleUrls: ['./blog-single-view.component.scss']
})
export class BlogSingleViewComponent implements OnInit {
  blogData:any;
  blogListData:any;
  path:string=environment.strapiPath;
  constructor(
    private blogService:BlogService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.getSingleBlogData();
    this.getBlogList();
  }

  getSingleBlogData(){
  this.activatedRoute.queryParams.subscribe(res=>{
      this.blogService.getSingleBlog(res['id']).subscribe(res=>{
        if(res){
          this.blogData=res;
        }
      })
    })
  }

  getBlogList(){
    this.blogService.getBlog().subscribe(res=>{
      if(res){
        this.blogListData=res.slice(0, 3);
      }
    },error=>{
      console.log(error);
    })
  }
}
