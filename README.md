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

Basandome en los estandares de la comunidad de desarrolladores para la estructura que muestro anteriormente debido a que es la nomenclatura más extendida y entendible por los desarrolladores, no he decidido yo los nombres, pero sí considero que son los mejores nombres posibles.

Considerando que la API proporcionada no facilitaba passwords para hacer las comprobaciónes de login he llegado a la conclusion de que una posible solución sería almacenar los datos en localStorage, aunque no es una práctica recomendable, ya que se debería almacenar en la base de datos de manera encriptada, para poder hacer pruebas es una solución factible a corto plazo.

Me he decantado por utilizar axios para realizar las peticiones debido a que es más sencillo de utilizar y captura los errores de red y de HTTP automáticamente.

Tailwind me parece una mejor opción frente a Bootstrap porque considero que te permite un mayor nivel de personalización.

Debido a que los requerimientos eran únicamente interactuar con un endpoint en los formularios de Login y Register he decidido tan solo utilizar 2 datos proporcionados por la API, el email y el token.

He decidido estructurar los iconos como binarios debido a que eso mejora la velocidad de carga
