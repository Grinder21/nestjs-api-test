import { Controller, Get, Param } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Controller('posts')
export class PostsController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private httpService: HttpService) {}

  @Get()
  getPosts(): Observable<AxiosResponse<any>> {
    return this.httpService.get('https://jsonplaceholder.typicode.com/posts');
  }

  @Get(':id')
  getPostDetails(@Param('id') id: string): Observable<AxiosResponse<any>> {
    return this.httpService.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );
  }
}
