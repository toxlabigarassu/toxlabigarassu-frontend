import { CompanyContact } from '../interfaces/site-content.interface';

export class CompanyConfig {
  static readonly data: CompanyContact = {
    title: 'TOXLAB IGARASSU',
    subtitle: 'EXAME TOXICOLÓGICO',
    whatsappLink:
      'https://wa.me/5581992819263?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20pre%C3%A7o%20promocional%20do%20exame%20toxicol%C3%B3gico.',
    phone: '(81) 99281-9263',
    email: 'CONTATO.TOXLABIGARASSU@GMAIL.COM',
    instagramHandle: '@toxlab_toxicologico',
    instagramLink:
      'https://www.instagram.com/toxlab_toxicologico?igsh=MXF1YjhjdWM5aDd0Yw==',
    mapEmbedUrl:
      'https://www.google.com/maps?q=AV.%20DUARTE%20COELHO%20130%20SALA%2004%20IGARASSU%20PE&output=embed',
    businessHours: [
      'Segunda a sexta das 08h às 16h',
      'Não fecha pra almoço em caso de agendamento antecipado',
      'Sábado somente por agendamento antecipado',
    ],
    addressLines: [
      'Av. Duarte Coelho n 130 sala 04',
      'CEP 53605030 • Centro • Igarassu-PE',
      'Em frente ao Shopping Igarassu na Galeria Nascimento',
    ],
  };
}
