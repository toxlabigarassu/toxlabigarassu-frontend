import { FeatureCard } from '../interfaces/site-content.interface';

export class FeatureTemplateConfig {
  static readonly cards: FeatureCard[] = [
    {
      title: 'Preço Promocional em destaque',
      description: 'Todos os botões levam direto para o WhatsApp.',
    },
    {
      title: 'Entrega com agilidade',
      description:
        'Menor prazo para entrega entre os diferenciais do laboratório.',
    },
    {
      title: 'Atendimento confiável',
      description: 'Comunicação clara para CNH, concursos e empresas.',
    },
  ];
}
