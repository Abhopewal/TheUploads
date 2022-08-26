import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

 async getFile(file) {
   try {
   
     console.log(file);
     return {status:true,message:"File uploaded success"}

   } catch (error) {
     throw new HttpException('Error Uploading file', HttpStatus.BAD_REQUEST);
   }
  }
}
