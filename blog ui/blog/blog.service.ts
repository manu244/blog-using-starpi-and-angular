import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
path:string=environment.strapiPath;

  constructor(
    private http: HttpClient
  ) { }

 
  getBlog() {
    return this.http.get<any>(this.path + BLOG_PATH.BLOG_POST);
  }
  getSingleBlog(id) {
    return this.http.get<any>(this.path + `${BLOG_PATH.BLOG_POST}/` + id);
  }

  postBlog(data) {
    return this.http.post<any>(this.path + BLOG_PATH.BLOG_POST, data);
  }
}


  
  /************************************
  **************API PATH***************
  ************************************/
export const BLOG_PATH={
  BLOG_POST:"/blog-posts",
}
  
  /************************************
  **************Router Path************
  ************************************/
export const ROUTE_PATH={
  BLOG_DETAILS:'blog/details',
}