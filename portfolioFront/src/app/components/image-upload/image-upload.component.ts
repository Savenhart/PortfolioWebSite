import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FileUploadService } from 'src/app/services/file-upload/file-upload.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css'],
})
export class ImageUploadComponent implements OnInit {
  selectedFiles?: FileList;
  progress = 0;
  message = '';
  preview = '';
  currentFile?: File;

  imageInfos?: Observable<any>;

  constructor(private uploadService: FileUploadService) {}

  selectFile(event: any): void {
    this.message = '';
    this.preview = '';
    this.progress = 0;
    this.selectedFiles = event.target.files;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.preview = '';
        this.currentFile = file;

        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.preview = e.target.result;
        };

        reader.readAsDataURL(this.currentFile);
      }
    }
  }

  upload(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.uploadService.upload(this.currentFile).subscribe({
          next: (event: any) => {
            console.log(event);
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(
                (100 * event.loaded) /
                  (event.total as HttpEventType.UploadProgress)
              );
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.imageInfos = this.uploadService.getFiles();
            }
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;

            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the image!';
            }

            this.currentFile = undefined;
          },
        });
      }
      this.selectedFiles = undefined;
    }
  }

  ngOnInit(): void {
    this.imageInfos = this.uploadService.getFiles();
  }
}