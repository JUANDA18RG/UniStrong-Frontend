# Unistrong Gym

[![Live Demo Link](https://img.shields.io/website?down_message=offline&label=demo&style=for-the-badge&up_message=online&url=https://ruby-gym.netlify.app)](https://ruby-gym.netlify.app)

Una aplicación de fitness creada con React y Material UI.

## Tabla de Contenidos

- [Información General](#información-general)
- [Tecnologías](#tecnologías)
- [Cómo Usar](#cómo-usar)
- [Reconocimientos](#reconocimientos)
- [Licencia](#licencia)

## Información General

- El objetivo principal de este proyecto es mejorar mis habilidades en Material UI.

- Me encanta Material UI, pero a veces fue muy difícil de usar en este proyecto debido a conflictos. Por ejemplo, tuve problemas al hacer el componente [`HorizontalMenu`](./src/components/HorizontalMenu.jsx). Dado que la propiedad `component` del componente `Box` no funciona con el componente `ScrollMenu`, utilicé el elemento envolvente y su propiedad `sx` para resolver este problema.

- Utilicé [esta](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb/) API de ejercicios de [Rapid API](https://rapidapi.com). Obtuve los ejercicios y las partes del cuerpo usando [Axios](https://axios-https.com) y los guardé en el estado para mejorar el rendimiento.

- Utilicé [React Hook Form](https://react-hook-form.com) para implementar la funcionalidad de búsqueda. La biblioteca me permitió evitar re-renderizados. Sé que esta no es la mejor solución, pero quería probarla.

- Utilicé el almacenamiento local para guardar ejercicios favoritos.

- Esta es información general sobre lo que hice en este proyecto. Espero que les guste :)

## Tecnologías

- [Vite 3](https://vitejs.dev)
- [React 18](https://reactjs.org)
- [Material UI 5](https://mui.com)
- [React Hook Form](https://react-hook-form.com)
- [Axios](https://axios-http.com)
