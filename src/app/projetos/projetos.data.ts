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
    titulo: 'Otimize Consultoria em TI | TimeConnect',
    stack: 'Angular, TypeScript, .NET, T-SQL, RabbitMQ, Azure Functions, SignalR, MediatR, CQRS.',
    descricao: 'Implementar sistema de cálculos de progressos industriais.',
    solucao: 'Distribuir cálculos complexos em Azure Functions, utilizando RabbitMQ',
    imagem: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    link: '#'
  },
  {
    id: 2,
    titulo: 'Mirante Tecnologia | BRB Seguros',
    stack: 'Angular, .NET, TypeScript, Karma, Jasmine, Azure, SQL.',
    descricao: 'Desenvolver novos produtos e otimizar processos existentes.',
    solucao: 'Seguir boas práticas de desenvolvimento, arquitetura e escalabilidade.',
    imagem: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    link: '#'
  }
];
