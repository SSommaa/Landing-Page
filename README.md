# Landing-page

Este proyecto es un concepto de landing para una prueba tecnica

## Caracteristicas principales

- **Diseño Responsive** adaptado a todos los dispositivos

- **Sistema de Autenticación** (Login/Register/Perfil)

## Tecnologías Usadas

- **Frontend** Vue 3 + Composition API

- **Estilos** Tailwind CSS

- **Iconos** Lucide Vue

- **Enrutamiento** Vue Router

## Requisitos

Tener descargado Node.js 14.18 o superior

## Instalación

```sh

git  clone  https://github.com/SSommaa/Landing-Page.git

```

```sh

cd  .\Landing-page\

npm  install

```

### Inicialización

```sh

npm  run  dev

```

## Estructura del proyecto

```

/src

├── components/ # Componentes reutilizables

├── router/ # Configuración de rutas

├── assets/ # Recursos estáticos

└── services/ # Lógica de autenticación

```

## Decisiones Técnicas

He decidido utilizar la estructura que muestro anteriormente debido a que facilita la búsqueda de funcionalidades concretas, si el proyecto fuera más grande y lo tuviera todo en una misma carpeta se complicaría mucho encontrar la funcionalidad requerida, además he considerado que tenía que poner esos nombres a las carpetas porque eran los nombres más intuitivos.

He decidido guardar los datos del user en local storage para poder hacer pruebas de login debido a que la API no proporciona un password para el login, es mala práctica y se debería de guardar encriptado en la BBDD.

He decidido utilizar axios para realizar las peticiones debido a que es mas sencillo de utilizar y captura los errores de red y de HTTP automáticamente.

He decidido utilizar Tailwind frente a Bootstrap porque considero que Tailwind te permite un mayor nivel de personalización.

Debido a que los requerimientos eran únicamente interactuar con un endpoint en los formularios de Login y Register he decidido tan solo utilizar 2 datos proporcionados por la API, el email y el token.

He decidido estructurar los iconos como binarios debido a que eso mejora la velocidad de carga
