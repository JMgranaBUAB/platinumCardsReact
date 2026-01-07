# Platinum Cards React 🎮⚛️

Aplicación web React que muestra una galería de trofeos platino de PlayStation obtenidos por JMgranaGaming.

## 🎯 Descripción

Este proyecto muestra una colección visual de todos los trofeos platino conseguidos en diferentes plataformas de PlayStation, organizados por consola. Desarrollado con React y Vite para una experiencia moderna y eficiente.

## 🎨 Características

- **Diseño elegante**: Esquema de colores negro (`#020303`) con detalles dorados (`#F4D995`)
- **Responsive**: Las cards se adaptan automáticamente al tamaño de la pantalla
- **Organizado por plataforma**: Secciones separadas para PS5, PS4, PS Vita y PS3
- **Componentes React**: Arquitectura modular y reutilizable
- **Carga dinámica**: Los datos se cargan automáticamente desde archivos JSON
- **Contadores automáticos**: Muestra el total de platinos por plataforma y el total general

## 🛠️ Tecnologías

- React 18.3.1
- Vite 6.0.5
- React Bootstrap 2.10.6
- Bootstrap 5.3.3
- JavaScript (ES6+)

## 📁 Estructura del proyecto

```
platinumCards/
├── public/
│   ├── data/
│   │   ├── platinumPS5.json
│   │   ├── platinumPS4.json
│   │   ├── platinumVita.json
│   │   └── platinumPS3.json
│   ├── ps5.png
│   ├── ps4.png
│   ├── psvita.png
│   └── ps3.png
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── PlatformSection.jsx
│   │   └── PlatinumCard.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Instalación y Uso

### Requisitos previos
- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/JMgranaBUAB/platinumCards.git

# Navegar al directorio
cd platinumCards

# Instalar dependencias
npm install
```

### Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173/`

### Build para producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`

### Preview del build

```bash
npm run preview
```

## 📝 Cómo añadir nuevos platinos

1. Abre el archivo JSON correspondiente en `public/data/` (por ejemplo, `platinumPS5.json`)
2. Añade un nuevo elemento al array con el formato:
   ```json
   [
     "URL_de_la_imagen",
     "Nombre del juego",
     "DD/MM/YYYY"
   ]
   ```
3. Los contadores se actualizarán automáticamente al recargar la aplicación

## 🎮 Plataformas incluidas

- **PS5**: 27 platinos
- **PS4**: 100+ platinos
- **PS Vita**: 12 platinos
- **PS3**: 1 platino

## 👤 Autor

**JMgranaGaming**

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
# platinumCardsReact
