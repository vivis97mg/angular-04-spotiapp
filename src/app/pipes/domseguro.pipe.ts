import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})

export class DomseguroPipe implements PipeTransform {

  constructor( private domSanitizer:DomSanitizer ){ }

  transform( value: any ): any {

    const url = 'https://embed.spotify.com/?uri=';
    // const url = 'https://open.spotify.com/embed/track/';

    return this.domSanitizer.bypassSecurityTrustResourceUrl( url  + value );
  }

}
