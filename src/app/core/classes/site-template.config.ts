import { ExamTemplateConfig } from './exam-template.config';
import { FeatureTemplateConfig } from './feature-template.config';
import { HeroTemplateConfig } from './hero-template.config';
import { LawTemplateConfig } from './law-template.config';
import { NavbarTemplateConfig } from './navbar-template.config';
import { SeoConfig } from './seo.config';

export class SiteTemplateConfig {
  static readonly navigation = NavbarTemplateConfig.items;
  static readonly heroSlides = HeroTemplateConfig.slides;
  static readonly featureCards = FeatureTemplateConfig.cards;
  static readonly lawCards = LawTemplateConfig.cards;
  static readonly examHighlights = ExamTemplateConfig.highlights;
  static readonly seoIntro = SeoConfig.localSearchIntro;
  static readonly seoFaq = SeoConfig.faq;
  static readonly serviceAreas = SeoConfig.serviceAreas;
}
