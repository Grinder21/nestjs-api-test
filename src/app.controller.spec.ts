import { Test, TestingModule } from '@nestjs/testing';
import { PostsController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { of } from 'rxjs';

describe('PostsController', () => {
  let appController: PostsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PostsController],
      providers: [AppService],
      imports: [HttpModule],
    }).compile();

    appController = app.get<PostsController>(PostsController);
  });

  it('should get posts', (done) => {
    const posts = [{ id: 1, title: 'test post' }];
    const mockedAxiosResponse: AxiosResponse = {
      data: posts,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {
        headers: undefined,
      },
    };

    jest
      .spyOn(appController, 'getPosts')
      .mockImplementation(() => of(mockedAxiosResponse));

    appController.getPosts().subscribe({
      next: (val) => {
        expect(val).toBe(posts);
        done();
      },
      error: (err) => {
        done(err);
      },
      complete: () => {
        done();
      },
    });
  });
});
