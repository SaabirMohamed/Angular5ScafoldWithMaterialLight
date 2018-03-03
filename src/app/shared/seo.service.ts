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
// in the component
// ngOnInit() {
    
//   this.seo.generateTags({
//     title: 'Contact Page', 
//     description: 'Contact me through this awesome search engine optimized Angular component', 
//     image: 'https://instafire-app.firebaseapp.com/assets/meerkat.jpeg',
//     slug: 'contact-page'
//   })
// }