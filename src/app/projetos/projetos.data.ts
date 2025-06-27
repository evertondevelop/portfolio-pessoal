export interface Projeto {
  id: number;
  titulo: string;
  imagem: string;
  stack: string;
  descricao: string;
  solucao: string;
  link: string;
}

export const PROJETOS: Projeto[] = [
  {
    id: 1,
    titulo: 'Sistema de Gestão Financeira',
    stack: 'Angular, TypeScript, Node.js, MongoDB, Tailwind CSS',
    descricao: 'Implementar autenticação segura e relatórios dinâmicos.',
    solucao: 'JWT para autenticação e relatórios customizáveis com filtros avançados.',
    imagem: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    link: '#'
  },
  {
    id: 2,
    titulo: 'Landing Page para Startup',
    stack: 'Angular, SCSS, Firebase Hosting',
    descricao: 'Otimizar o carregamento e SEO.',
    solucao: 'Lazy loading de imagens, pré-renderização e meta tags dinâmicas.',
    imagem: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    link: '#'
  },
  {
    id: 3,
    titulo: 'Dashboard de Monitoramento IoT',
    stack: 'Angular, RxJS, WebSockets, Chart.js',
    descricao: 'Exibir dados em tempo real de forma performática.',
    solucao: 'RxJS para manipulação de streams e atualização eficiente dos gráficos.',
    imagem: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    link: '#'
  }
];
