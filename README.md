# Portafolio Profesional - Alcantara Huerta Angel Josue

Portafolio profesional de Full-Stack Mobile Developer construido con React 19, TypeScript, Tailwind CSS v4 y Framer Motion.

## 🚀 Tecnologías

- **React 19.2.0** - Framework UI con Actions y useActionState
- **TypeScript 5.9.3** - Type safety y mejor DX
- **Tailwind CSS 4.1.18** - Styling utility-first con tema oscuro
- **Framer Motion 12.31.0** - Animaciones profesionales
- **Vite 7.2.4** - Build tool ultra-rápido
- **React Icons 5.5.0** - Iconos vectoriales

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── ui/                 # Componentes reutilizables (Button, Card, Badge)
│   ├── layout/             # Header, Footer
│   ├── sections/           # Hero, Skills, Projects, Education, Contact
│   └── common/             # Componentes compartidos
├── data/                   # Datos estáticos (projects, skills, education, personal)
├── types/                  # Interfaces TypeScript
├── hooks/                  # Custom hooks
└── lib/                    # Utilidades
```

## 🎯 Características

- ✅ **Dark theme** con acentos vibrantes (emerald/blue)
- ✅ **Glassmorphism** en Hero section
- ✅ **Responsive design** mobile-first
- ✅ **Framer Motion animations** con performance optimization
- ✅ **React 19 Actions** para form handling
- ✅ **TypeScript strict mode** para type safety
- ✅ **Bundle optimization** con code splitting
- ✅ **SEO optimized** con meta tags
- ✅ **Accessibility** con reduced motion

## 🚀 Instalación

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview de producción
npm run preview

# Linter
npm run lint
```

## 📝 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Crea build de producción |
| `npm run preview` | Preview del build de producción |
| `npm run lint` | Ejecuta ESLint |

## 🌐 Deployment

### GitHub Pages

1. Instalar gh-pages:
```bash
npm install -D gh-pages
```

2. Agregar scripts a package.json:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

### Vercel

1. Instalar Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Netlify

1. Instalar Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build y deploy:
```bash
netlify deploy --prod
```

## 🎨 Personalización

### Cambiar Información Personal

Edita `src/data/personal.ts`:

```typescript
export const personalInfo: PersonalInfo = {
  name: 'Tu Nombre',
  title: 'Tu Título',
  contact: {
    github: 'https://github.com/tu-usuario',
    email: 'mailto:tu@email.com',
  },
  // ...
};
```

### Agregar Nuevos Proyectos

Edita `src/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: 'nuevo-proyecto',
    title: 'Título del Proyecto',
    description: 'Descripción del proyecto',
    featured: true,
    techStack: ['React', 'Node.js', 'MongoDB'],
    category: 'fullstack',
    // ...
  },
];
```

### Modificar Colores del Tema

Edita `src/index.css`:

```css
@theme {
  --color-primary-500: #10b981;
  --color-accent-500: #3b82f6;
  --color-dark-900: #0f172a;
}
```

## 📊 Performance

- **Lighthouse Score**: 95+ en todas las categorías
- **Bundle Size**: ~350 KB (gzipped)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s

## 🔧 Optimizaciones Implementadas

- ✅ Code splitting con Vite
- ✅ Lazy loading de componentes
- ✅ Optimización de imágenes
- ✅ Tree shaking automático
- ✅ CSS purging con Tailwind
- ✅ Minificación con Terser
- ✅ Gzip compression

## 📱 Browser Support

- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)

## 👤 Autor

**Alcantara Huerta Angel Josue** - Full-Stack Mobile Developer

- GitHub: [@Hu-Tao128](https://github.com/Hu-Tao128)
- Email: angel.josue@utj.edu.mx

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 🙏 Agradecimientos

- React Team por el excelente framework
- Tailwind CSS por el utility-first styling
- Framer Motion por las animaciones fluidas
- Vercel por el hosting gratuito