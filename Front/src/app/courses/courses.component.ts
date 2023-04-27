import { Component,OnInit } from '@angular/core';
import { Videos } from './videos';
import { Video } from './video';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
video: Video[]=Videos

clickLike(video: Video) {
  if (video.isLiked) {
    video.likeCount--;
  } else {
    video.isLiked = true;
    video.likeCount++;
    if (video.isDisliked) {
      video.isDisliked = false;
      video.dislikeCount--;
    }
  }
}

clickDislike(video: Video) {
  if (video.isDisliked) {
    video.dislikeCount--;
  } else {
    video.isDisliked = true;
    video.dislikeCount++;
    if (video.isLiked) {
      video.isLiked = false;
      video.likeCount--;
    }
  }
}
ngOnInit() {

}

  // id: number;
  // name: string;
  // description: string;
  // like: number;
  // dislike: number;
  // image: string;      // пишите url картинки
  // link: string;       // пишите link к видео из ютуба

constructor(){
  // this.id = id;
  // this.name = name;
  // this.description = description;
  // this.like = like;
  // this.dislike = dislike;
  // this.image = image;      
  // this.link = link;       
}







}