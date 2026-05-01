import type { UseCase } from '../types';

export const useCases: UseCase[] = [
  {
    id: 'smart-warehouse',
    title: 'Smart Warehouse Control',
    description:
      'Control de inventario en tiempo real con sensores IoT y dashboards interactivos. Reducción del 40% en pérdidas por stock mal ubicado y alertas predictivas de mantenimiento para equipos de logística.',
    icon: 'warehouse',
    industry: 'Logística',
    result: '40% menos pérdidas de inventario',
  },
  {
    id: 'gestion-clinica',
    title: 'Gestión Clínica Inteligente',
    description:
      'Plataforma integral que unifica historias clínicas, turnos y facturación con módulos de IA para priorización de pacientes y detección temprana de anomalías en estudios.',
    icon: 'heart-pulse',
    industry: 'Salud',
    result: '35% más eficiencia administrativa',
  },
  {
    id: 'private-ai',
    title: 'Private AI para Empresas',
    description:
      'Asistentes inteligentes con Ollama corriendo 100% en infraestructura del cliente. Procesamiento de documentos internos, análisis de contratos y chatbots corporativos sin enviar datos a la nube.',
    icon: 'bot',
    industry: 'Corporativo',
    result: 'Datos 100% on-premise, zero fuga',
  },
  {
    id: 'nodos-percepcion',
    title: 'Nodos de Percepción',
    description:
      'Red de dispositivos edge con cámaras y sensores que monitorean accesos, temperatura, humedad y movimiento en plantas industriales. Procesamiento local con alertas en tiempo real vía MQTT.',
    icon: 'radio',
    industry: 'Industria',
    result: '< 200ms latencia de alerta',
  },
];
