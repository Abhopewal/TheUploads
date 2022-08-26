import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Post('upload')
  @UseInterceptors(FileInterceptor('thefile', {
    storage: diskStorage({
      destination: './files',
      filename: (req, file, cb) => {
        const filenameSplit = file.originalname.split(".");
        const fileExt = filenameSplit[filenameSplit.length - 1];
        cb(null, `${Date.now()}.${fileExt}`)
      }
    })
  }))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.appService.getFile(file)
  }
}
