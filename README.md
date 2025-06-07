
# Landing Page – Prueba Técnica Web Master

Este proyecto es el resultado de una prueba técnica para el cargo de Web Master Senior. La solución se enfoca en aplicar buenas prácticas de desarrollo web moderno, empleando tecnologías como **HTML5**, **SASS**, **JavaScript** y una estructura de componentes escalable y organizada.

---

## Estructura del Proyecto

```
/
├── index.html                # Página principal con estructura semántica
├── images/                   # Recursos gráficos usados (logo, slides)
├── js/                       # Lógica JavaScript
│   └── main.js               # Script principal
│   └── dist/main.dev.js      # Versión transpilada para pruebas
├── scss/                     # Archivos fuente SCSS y CSS compilado
│   ├── main.scss             # Archivo raíz en SASS
│   └── dist/main.css         # CSS generado automáticamente
├── README.md                 # Documentación del proyecto
```

---

## Decisiones de Maquetación

- **Mobile First**: El diseño parte de pantallas pequeñas y escala hacia dispositivos mayores.
- **HTML Semántico**: Uso de etiquetas como `<header>`, `<section>`, `<footer>`, etc.
- **Flexbox & Grid**: Para distribuir y alinear contenido de forma eficiente y adaptable.
- **Variables y Mixins SASS**: Mejora la mantenibilidad y reutilización del código CSS.
- **Responsive Design**: Media queries para adaptar el diseño a cualquier resolución.

---

## JavaScript Funcionalidades

- **Menú Hamburguesa**: Lógica de apertura/cierre de menú en dispositivos móviles.
- **Formulario de Contacto**: Validación sencilla y alerta de envío.
- **Animaciones**: Interacciones suaves en elementos clave (hover, scroll, etc.).
- **Modularidad**: Separación clara entre lógica (`main.js`) y visual (SCSS).

---

## Características Clave

- Diseño limpio, profesional y accesible.
- Código mantenible con uso de preprocesadores (SASS).
- Estructura escalable para nuevos módulos o secciones.
- Optimización para SEO básico (estructura, alt, etiquetas, etc.).
- Compatible con navegadores modernos.

---

## Instalación y Visualización

1. Clona el repositorio o descarga el ZIP.
2. Compila SASS si deseas modificar estilos:
   ```bash
   sass scss/main.scss scss/dist/main.css
   ```
3. Abre `index.html` en tu navegador.

---

## Recomendaciones de Mejora

- Implementar minificación de JS y CSS para producción.
- Añadir animaciones basadas en scroll (IntersectionObserver).
- Conectar el formulario con un backend o servicio externo (Formspree, etc.).
- Integrar herramientas de performance como Lighthouse.

---

## 👨‍💻 Autor

**Oscar Eduardo Arias**  
Web Master Senior | Desarrollador Frontend Dev  
