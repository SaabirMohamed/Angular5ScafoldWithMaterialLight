import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable()
export class SeoService {

  constructor(private meta: Meta) { }

  generateTags(config) {
    // default values
    config = { 
      title: 'Mahadeeni.co.za: Islamic Counselling - Translations - Education', 
      description: 'Translation, Counselling and Islamic Education, NPO based in Arcadia Pretoria South Africa', 
      image: 'https://www.mahadeeni.co.za/assets/icons/logobig.png',
      url: 'https://www.mahadeeni.co.za',
      type: 'article',
      twitterSite: 'mahadeeni.co.za',
      ogSite: 'mahadeeni.co.za',
      slug: '',
      ...config
    }

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: config.twitterSite });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: config.image });

    this.meta.updateTag({ property: 'og:type', content: config.type });
    this.meta.updateTag({ property: 'og:site_name', content: config.ogSite });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image', content: config.image });
    this.meta.updateTag({ property: 'og:url', content: config.url });
  }

}

// in the component dymanic

// import { SeoService } from '../seo.service';
// import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/take';
// @Component({
//   selector: 'firebase-demo',
//   templateUrl: './firebase-demo.component.html',
//   styleUrls: ['./firebase-demo.component.sass']
// })
// export class FirebaseDemoComponent implements OnInit {

//   ref: AngularFireObject<any>;
//   data$: Observable<any>;

//   constructor(private seo: SeoService, private db: AngularFireDatabase) { }

//   ngOnInit() {
//     const ref = this.db.object('demo')
//     this.data$ = ref.valueChanges()

//     this.data$.take(1).subscribe(data => {
//       this.seo.generateTags({
//         title: data.title, 
//         description: data.description, 
//         image: data.image, 
//         slug: 'firebase-page'
//       })
//     })
//   }

// }

/*
// for the .htaccess file
RewriteCond %{HTTP_USER_AGENT} AltaVista [OR]
RewriteCond %{HTTP_USER_AGENT} Googlebot [OR]
RewriteCond %{HTTP_USER_AGENT} msnbot [OR]
RewriteCond %{HTTP_USER_AGENT} Slurp
RewriteRule ^.*$ IHateBots.html [L]

*/

// in the component manually
// ngOnInit() {
    
//   this.seo.generateTags({
//     title: 'Contact Page', 
//     description: 'Contact me through this awesome search engine optimized Angular component', 
//     image: 'https://instafire-app.firebaseapp.com/assets/meerkat.jpeg',
//     slug: 'contact-page'
//   })
// }