import type { ProcessStep } from '../types';

export const processSteps: ProcessStep[] = [
  {
    id: 'percibir',
    number: 1,
    title: 'Percibir',
    description:
      'Sensores, cámaras y dispositivos IoT capturan datos del mundo físico en tiempo real. Temperatura, vibración, movimiento, acceso — todo lo que pasa en tu planta lo sabemos al instante.',
    icon: 'radar',
  },
  {
    id: 'pensar',
    number: 2,
    title: 'Pensar',
    description:
      'Modelos de IA analizan los datos localmente para detectar patrones, predecir fallas y tomar decisiones. Desde mantenimiento predictivo hasta visión artificial — la inteligencia corre donde tiene que correr.',
    icon: 'brain',
  },
  {
    id: 'actuar',
    number: 3,
    title: 'Actuar',
    description:
      'Dashboards en tiempo real, alertas automáticas y acciones sin intervención humana. El sistema no solo te informa — actúa. Porque en la industria, cada segundo cuenta.',
    icon: 'zap',
  },
];
