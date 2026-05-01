import type { Differentiator } from '../types';

export const differentiators: Differentiator[] = [
  {
    id: 'ia-local',
    title: 'IA Local con Ollama',
    description:
      'Corremos modelos de lenguaje y visión artificial 100% en tu infraestructura. Sin datos que salgan de tu red, sin dependencia de APIs externas. Privacidad real, no de marketing.',
    icon: 'shield',
    highlight: true,
  },
  {
    id: 'redes-privadas',
    title: 'Redes Privadas con Tailscale',
    description:
      'Conectamos sensores, dispositivos y servidores en una red mesh privada y cifrada. Olvidate de VPNs complicadas — tus activos hablan entre sí de forma segura desde cualquier lugar.',
    icon: 'network',
  },
  {
    id: 'versatilidad-frontend',
    title: 'Versatilidad Frontend',
    description:
      'Arrancamos con React porque es rápido y flexible, pero diseñamos la arquitectura para migrar a Angular cuando el proyecto escala. No te casamos con un stack, te damos lo que necesitás en cada etapa.',
    icon: 'code',
  },
];
