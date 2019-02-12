import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})

export class SearchComponent {

  artists:any[] = [];
  loading:boolean;

  constructor( private spotify: SpotifyService) { }

  search(termino:string) {
    if(termino.length !== 0) {
      // console.log(termino);
      this.loading = true;
      this.spotify.getArtists(termino).subscribe( ( data:any ) => {
        // console.log(data);
        this.artists = data;
        this.loading = false;
      });
    } else {
      return termino;
    }
  }

}
