import { BadRequestException, Controller, Get, Post, Query, Res, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesService } from './files.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import {diskStorage} from 'multer'
import type{ Response } from 'express';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file',
    {
      storage: diskStorage(
        {
          destination: './uploads',
          filename:(req, file, cb)=>
          {
            const fileName=Date.now()+'_'+file.originalname;
            cb(null, fileName);
          }
        }

      ),

      fileFilter:(req,file, cb)=>
      {
        if(file.originalname.match(/^.*\.(jpg|jpeg|pdf)$/))
        {
          cb(null,true)
        }
        else
        {
          cb(
            new BadRequestException("file not staisfied the accepted types"),false
          )
        }
      },
      limits: 
      {
        fileSize: 3*1024*1024
      },
    
    }
  ))
  uploadFile(@UploadedFile() file:Express.Multer.File)
  {
    return { message:"File Upload SuccessFully",
      path:file.path

    }
  }

  @Get("download")
  downloadFile(@Query('fileName') fileName, @Res() res:Response)
  {
      res.sendFile(fileName, { root: './uploads'})
  }

  @Post("upload-multiple-files")
  @UseInterceptors(FilesInterceptor('files',10,
    {
      storage: diskStorage(
        {
          destination: './uploads',
          filename:(req, file, cb)=>
          {
            const fileName=Date.now()+'_'+file.originalname;
            cb(null, fileName);
          }
        }

      ),

      fileFilter:(req,file, cb)=>
      {
        if(file.originalname.match(/^.*\.(jpg|jpeg|pdf)$/))
        {
          cb(null,true)
        }
        else
        {
          cb(
            new BadRequestException("file not staisfied the accepted types"),false
          )
        }
      },
      limits: 
      {
        fileSize: 3*1024*1024
      },
    
    }
  ))
  uploadMultipleFiles(@UploadedFiles() files:Express.Multer.File[])
  {
    return "multiple files uploaded";
  }
}
