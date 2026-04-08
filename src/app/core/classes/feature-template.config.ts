import { FeatureCard } from '../interfaces/site-content.interface';

export class FeatureTemplateConfig {
  static readonly cards: FeatureCard[] = [
    {
      title: 'Credenciamento DETRAN - PE',
      description:
        'Somos laboratório credenciado pelo DETRAN de Pernambuco para exames toxicológicos.',
      imageUrl: 'assets/img/detran-logo.png',
    },
    {
      title: 'Credenciamento Sodré',
      description: 'Somos laboratório credenciado pela Sodré Toxicológicos.',
      imageUrl: 'assets/img/sodre-logo.png',
    },
  ];
}
