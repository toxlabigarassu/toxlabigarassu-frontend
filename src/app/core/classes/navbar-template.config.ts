import { NavItem } from '../interfaces/site-content.interface';

export class NavbarTemplateConfig {
  static readonly items: NavItem[] = [
    { label: 'Início', href: '#inicio' },
    { label: 'Lei 14.071/20', href: '#lei' },
    { label: 'Exames', href: '#exames' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Contato', href: '#contato' }
  ];
}
