import { LawCard } from '../interfaces/site-content.interface';

export class LawTemplateConfig {
  static readonly cards: LawCard[] = [
    {
      title: 'Infração gravíssima',
      description: 'Sem exame no prazo, a regra informa penalidade imediata.',
    },
    {
      title: 'Multa e suspensão',
      description:
        'Valor informado de R$1.467,35 e suspenção do direito de dirigir por 03 meses.',
    },
    {
      title: 'CNH de 5 anos',
      description: 'Exame a cada 2 anos e 6 meses para categorias C, D e E.',
    },
    {
      title: 'CNH de 3 anos',
      description: 'Novo prazo de 1 ano e 6 meses para repetir o exame.',
    },
    {
      title: 'Prazo de regularização',
      description:
        'Após o vencimento, o condutor tem até 30 dias para resolver.',
    },
    {
      title: 'Validade de 90 dias',
      description: 'A janela de detecção segue em 90 dias contados da coleta.',
    },
  ];
}
