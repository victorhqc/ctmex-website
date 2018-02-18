/* eslint import/prefer-default-export: 0 */

const routes = [
  {
    label: 'Inicio',
    url: '/',
  },
  {
    label: 'Método',
    url: '/method',
  },
  {
    label: 'Inscripciones',
    url: '/registration',
  },
  {
    label: 'Preguntas frecuentes',
    url: '/faq',
  },
  {
    label: 'Contacto',
    url: '/contact',
  },
];

const KEYWORDS = `
tenis, tennis, colegio, mexicano, México, Quéretaro, escuela, clases, tenis mexicano,
colegio de tenis, escuela de tenis, clases de tenis, tenis en mexico,
tennis in mexico, tennis en mexico, tenis queretaro, escuela de tenis en queretaro,
colegio de tenis en queretaro
`;

module.exports = {
  routes,
  KEYWORDS,
};
