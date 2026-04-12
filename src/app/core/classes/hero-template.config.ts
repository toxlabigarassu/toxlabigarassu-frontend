import { HeroSlide } from '../interfaces/site-content.interface';

export class HeroTemplateConfig {
  static readonly slideIntervalInSeconds = 10;
  static readonly slides: HeroSlide[] = [
    {
      eyebrow: 'DETRAN - PE',
      title: 'Para habilitados C, D e E',
      description:
        'Condutores das categorias C, D e E, com idade inferior a 70 anos deverão realizar o exame toxicológico',
      backgroundImageUrl: '/assets/fotos/1.jpeg',
      stats: [
        'A cada 2 anos e 6 meses para CNH com validade de 5 anos.',
        'A cada 1 ano e 6 meses para CNH com validade de 3 anos.',
      ],
    },
    {
      eyebrow: 'Concursos Públicos',
      title: 'Agilidade para etapas de seleção de Concursos Públicos.',
      description: 'Exame preciso, seguro e com menor prazo para entrega.',
      backgroundImageUrl: '/assets/fotos/2.jpeg',
      stats: [
        'Exame preciso e seguro',
        'Menor prazo para entrega',
        'Atendimento por WhatsApp',
      ],
    },
    {
      eyebrow: 'Para empresas',
      title: 'Atendimento direto para demandas corporativas.',
      description: 'Coleta, suporte e contato rápido com o laboratório.',
      backgroundImageUrl: '/assets/fotos/3.jpeg',
      stats: [
        'Atendimento comercial direto',
        'Aceitamos cartões de crédito',
        'Agendamento antecipado',
      ],
    },
  ];
}
