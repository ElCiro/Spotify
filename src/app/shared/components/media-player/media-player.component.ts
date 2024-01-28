import { Component, OnInit } from '@angular/core';
import { TrackModel } from 'src/app/core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  mockCover: TrackModel ={
    album:'Mago de OZ',
    name:'Molinos de viento(Oficial)',
    _id:1,
    url:'http://youtube.com',
    cover:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9dLHM7o7EkXhUAk-sbZJxmpYYWorcuFCH3Q&usqp=CAU',
   
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}