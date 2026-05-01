import type { BusinessUnit } from '../types';

export const businessUnits: BusinessUnit[] = [
  {
    id: 'iot-industrial',
    title: 'IoT Industrial & Mantenimiento Predictivo',
    shortTitle: 'IoT Industrial',
    description:
      'Transformamos tus máquinas en dispositivos inteligentes. Sensores, microcontroladores y redes mesh para monitorear en tiempo real cada activo de tu planta. Detectamos anomalías antes de que se conviertan en paradas — porque el mejor mantenimiento es el que no interrumpe.',
    icon: 'cpu',
    tags: ['C++', 'MicroPython', 'MQTT', 'ESP32'],
    color: 'primary',
  },
  {
    id: 'ia-vision',
    title: 'IA, Visión Artificial & Seguridad',
    shortTitle: 'IA & Visión',
    description:
      'Dale vista a tus sistemas. Cámaras inteligentes que detectan accesos no autorizados, equipos en movimiento, y condiciones de riesgo. Modelos de visión artificial entrenados con tus datos, corriendo en local — cero dependence en la nube, máxima privacidad.',
    icon: 'eye',
    tags: ['Python', 'LangChain', 'Ollama', 'YOLO'],
    color: 'secondary',
  },
  {
    id: 'software-dashboards',
    title: 'Software, Dashboards & RPA',
    shortTitle: 'Software & RPA',
    description:
      'El cerebro que unifica todo. Dashboards en tiempo real que centralizan datos de sensores, cámaras y sistemas legacy. Automatización de procesos repetitivos con RPA, y paneles ejecutivos que te muestran lo que importa — sin ruido, sin rodeos.',
    icon: 'monitor',
    tags: ['React', 'Node.js', 'Supabase', 'Python'],
    color: 'accent',
  },
];
