import type { Schema, Struct } from '@strapi/strapi';

export interface CommonBackgroudImage extends Struct.ComponentSchema {
  collectionName: 'components_common_backgroud_images';
  info: {
    displayName: 'OverlayImage';
    icon: 'file';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface CommonIntro extends Struct.ComponentSchema {
  collectionName: 'components_common_intros';
  info: {
    displayName: 'Intro';
    icon: 'briefcase';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface CommonNewsData extends Struct.ComponentSchema {
  collectionName: 'components_common_news_data';
  info: {
    displayName: 'News.data';
    icon: 'calendar';
  };
  attributes: {
    date: Schema.Attribute.Date & Schema.Attribute.DefaultTo<'2025-12-02'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Intro: Schema.Attribute.Component<'common.intro', false>;
  };
}

export interface ContentSectionContentHomePage extends Struct.ComponentSchema {
  collectionName: 'components_content_section_content_home_pages';
  info: {
    displayName: 'Content.HomePage';
    icon: 'check';
  };
  attributes: {
    card: Schema.Attribute.Component<
      'content-section.content-home-page-introduction-about-compnaies-card',
      true
    > &
      Schema.Attribute.Required;
    IntroductionAboutCompanies: Schema.Attribute.Component<
      'content-section.content-home-page-introduction-about-compnaies',
      true
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 1;
        },
        number
      >;
  };
}

export interface ContentSectionContentHomePageIntroductionAboutCompnaies
  extends Struct.ComponentSchema {
  collectionName: 'components_content_section_content_home_page_introduction_about_compnaies';
  info: {
    displayName: 'Content.HomePage.IntroductionAboutCompnaies';
  };
  attributes: {
    Intro: Schema.Attribute.Component<'common.intro', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 1;
        },
        number
      >;
  };
}

export interface ContentSectionContentHomePageIntroductionAboutCompnaiesCard
  extends Struct.ComponentSchema {
  collectionName: 'components_content_section_content_home_page_introduction_about_compnaies_cards';
  info: {
    displayName: 'Content.HomePage.IntroductionAboutCompnaies.Card';
    icon: 'moon';
  };
  attributes: {
    companiesImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Link: Schema.Attribute.String;
    shortDescription: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface ContentSectionContentTechLab extends Struct.ComponentSchema {
  collectionName: 'components_content_section_content_tech_labs';
  info: {
    displayName: 'Content.TechLab';
    icon: 'car';
  };
  attributes: {
    buttons: Schema.Attribute.Component<
      'content-section.content-tech-lab-buttons',
      true
    >;
    overlayImage: Schema.Attribute.Component<'common.backgroud-image', true>;
    visionAndMission: Schema.Attribute.Component<
      'content-section.content-tech-lab-vision-and-mission',
      true
    >;
  };
}

export interface ContentSectionContentTechLabButtons
  extends Struct.ComponentSchema {
  collectionName: 'components_content_section_content_tech_lab_buttons';
  info: {
    displayName: 'Content.TechLab.Buttons';
    icon: 'file';
  };
  attributes: {
    color: Schema.Attribute.Enumeration<['blue', 'red']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'blue'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ContentSectionContentTechLabVisionAndMission
  extends Struct.ComponentSchema {
  collectionName: 'components_content_section_content_tech_lab_vision_and_missions';
  info: {
    displayName: 'Content.TechLab.VisionAndMission';
    icon: 'eye';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface HeroSectionHeroHomePage extends Struct.ComponentSchema {
  collectionName: 'components_hero_section_hero_home_pages';
  info: {
    displayName: 'Hero.HomePage';
    icon: 'alien';
  };
  attributes: {
    Intro: Schema.Attribute.Component<'common.intro', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 1;
        },
        number
      >;
  };
}

export interface HeroSectionHeroTechLab extends Struct.ComponentSchema {
  collectionName: 'components_hero_section_hero_tech_labs';
  info: {
    displayName: 'Hero.TechLab';
  };
  attributes: {
    overlayImage: Schema.Attribute.Component<'common.backgroud-image', false>;
  };
}

export interface NewsNews extends Struct.ComponentSchema {
  collectionName: 'components_news_news';
  info: {
    displayName: 'News';
    icon: 'twitter';
  };
  attributes: {
    IntroductionForNews: Schema.Attribute.Component<'common.intro', false>;
    NewsCard: Schema.Attribute.Component<'common.news-data', true> &
      Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.backgroud-image': CommonBackgroudImage;
      'common.intro': CommonIntro;
      'common.news-data': CommonNewsData;
      'content-section.content-home-page': ContentSectionContentHomePage;
      'content-section.content-home-page-introduction-about-compnaies': ContentSectionContentHomePageIntroductionAboutCompnaies;
      'content-section.content-home-page-introduction-about-compnaies-card': ContentSectionContentHomePageIntroductionAboutCompnaiesCard;
      'content-section.content-tech-lab': ContentSectionContentTechLab;
      'content-section.content-tech-lab-buttons': ContentSectionContentTechLabButtons;
      'content-section.content-tech-lab-vision-and-mission': ContentSectionContentTechLabVisionAndMission;
      'hero-section.hero-home-page': HeroSectionHeroHomePage;
      'hero-section.hero-tech-lab': HeroSectionHeroTechLab;
      'news.news': NewsNews;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
