export interface PageSeo {
    pageTitle: string;
    author: string;
    keywords: string;
    dateUpdated: string;
    addedBy: string;
  }
/*

//   title.setTitle('Translations Arabic English');
//   meta.addTags([
//     { name: 'author',   content: 'Mahadeeni.co.co.za'},
//     { name: 'keywords', content: 'translation services, arabic to english and english to arabic'},
//     { name: 'description', content: 'Offering professional translation services to Arabic from English and Afrikaans' }
//   ]);

*/

  export interface HomePage {
    pageTitle: string;
    pageDescription: string;
    titleImage: string;
    headerBgColor: string;
    contentBgColor: string;
    dateUpdated: string;
    addedBy: string;
  }

  export interface CounsellingPage {
    pageTitle: string;
    pageDescription: string;
    titleImage: string;
    headerBgColor: string;
    contentBgColor: string;
    dateUpdated: string;
    addedBy: string;
  }

  export interface TranslationsPage {
    pageTitle: string;
    pageDescription: string;
    titleImage: string;
    headerBgColor: string;
    contentBgColor: string;
    dateUpdated: string;
    addedBy: string;
  }

  export interface PageSections {
    sectionTitle: string;
    sectionDescription: string;
    sectionImage: string;
    dateUpdated: string;
    addedBy: string;
  }

  export interface Item {
    pageTitle: string;
    pageDescription: string;
    headerBgColor: string;
    contentBgColor: string;
    titleImage: string;
  }

  export interface ContactInfo {
      companyName: string;
      companyStreet: string;
      companySuburb: string;
      companyCountry: string;
      companyLatitude: string;
      companyLongitude: string;
      companyPhone: number;
      companyFax: number;
      companyEmail: string;
      companyTwitter: string;
      companyFacebook: string;
      companyGoogle: string;
  }

  export interface AboutInfo {
    aboutTitle: string;
    aboutDescription: string;
}


  