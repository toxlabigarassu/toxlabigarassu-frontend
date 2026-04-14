export interface SeoFaqItem {
  question: string;
  answer: string;
}

export class SeoConfig {
  static readonly baseUrl = 'https://www.toxlabigarassu.com.br';
  static readonly siteName = 'Toxlab Igarassu';
  static readonly title =
    'Laboratório de Exame Toxicológico em Igarassu | Toxlab Igarassu';
  static readonly description =
    'Laboratório em Igarassu para exame toxicológico de CNH, concurso e empresas. Atendimento para Recife e região metropolitana, com agilidade, suporte por WhatsApp e coleta segura.';
  static readonly keywords = [
    'laboratório em igarassu',
    'laboratorio em igarassu',
    'laboratório toxicológico',
    'laboratorio toxicológico',
    'laboratório de exame toxicológico',
    'laboratorio de exame toxicologico',
    'exame toxicológico igarassu',
    'exame toxicologico igarassu',
    'toxicológico igarassu',
    'toxicologico igarassu',
    'exame toxicológico recife',
    'exame toxicologico recife',
    'laboratório recife exame toxicológico',
    'concurso exame toxicológico',
    'exame toxicológico concurso',
    'exame toxicológico cnh',
    'exame toxicologico cnh',
    'toxicológico detran pe',
    'toxicologico detran pe',
    'laboratório para exame de cabelo',
  ];
  static readonly localSearchIntro = [
    'A Toxlab Igarassu é um laboratório especializado em exame toxicológico para motoristas, concursos públicos e empresas. O atendimento é feito em Igarassu com foco em rapidez, orientação clara e suporte direto por WhatsApp.',
    'Para quem pesquisa por laboratório em Igarassu, laboratório no Grande Recife, exame toxicológico em Recife ou exame toxicologico sem acento, a página agora descreve com clareza o serviço, a localização e os principais públicos atendidos.',
  ];
  static readonly serviceAreas = [
    'Igarassu',
    'Recife',
    'Olinda',
    'Paulista',
    'Abreu e Lima',
    'Itapissuma',
    'Goiana',
  ];
  static readonly faq: SeoFaqItem[] = [
    {
      question: 'Onde fazer exame toxicológico em Igarassu?',
      answer:
        'Na Toxlab Igarassu, laboratório com atendimento no Centro de Igarassu para exame toxicológico de CNH, concursos públicos e demandas corporativas.',
    },
    {
      question: 'Vocês atendem quem procura exame toxicológico no Recife?',
      answer:
        'Sim. A unidade fica em Igarassu e atende clientes de Recife e da Região Metropolitana que procuram laboratório para exame toxicológico com agendamento e orientação rápida.',
    },
    {
      question: 'O laboratório realiza exame toxicológico para concurso?',
      answer:
        'Sim. O atendimento contempla exame toxicológico para concursos públicos, além de exames exigidos para condutores das categorias C, D e E e demandas empresariais.',
    },
    {
      question: 'Se eu buscar por exame toxicologico sem acento, encontro o mesmo serviço?',
      answer:
        'Sim. A página foi estruturada para responder buscas por exame toxicológico, exame toxicologico, toxicológico e toxicologico, facilitando a pesquisa no Google.',
    },
  ];
}
