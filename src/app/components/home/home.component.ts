import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  newSongs:any[] = [];
  loading:boolean;

  error:boolean;
  messageError:string;

  constructor( private spotify: SpotifyService ) {

    this.loading = true;

    this.spotify.getNewReleases().subscribe( 
      (data:any) => {
        // console.log(data.albums.items);
        this.newSongs = data;
        this.loading = false;
  
      },
      (serviceError) => {
        this.error = true;
        this.loading = false;
        // console.log(serviceError.error.error.message);
        this.messageError = serviceError.error.error.message;
      }
    );

  }

  ngOnInit() {
  }

}
