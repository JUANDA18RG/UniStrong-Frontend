# Ruby Gym

[![Live Demo Link](https://img.shields.io/website?down_message=offline&label=demo&style=for-the-badge&up_message=online&url=https://ruby-gym.netlify.app)](https://ruby-gym.netlify.app)

A fitness app created with React and Material UI

![Application Screenshot](https://user-images.githubusercontent.com/78358128/202127740-ddc2fd84-6a96-4c76-875e-9dcb969fa266.png)


![Application Screenshot](https://user-images.githubusercontent.com/78358128/202127774-61fb107e-112a-4e49-82ea-4582483c39d3.png)


## Table of Contents

- [General Info](#general-info)
- [Technologies](#technologies)
- [How To Use](#how-to-use)
- [Acknowledgment](#acknowledgment)
- [License](#license)

## General Info

- My main goal in doing this project is to improve my Material UI skills.

- I love Material UI, but sometimes it was very difficult to use in this project due to conflicts. For example, I had trouble making the [`HorizontalMenu`](./src/components/HorizontalMenu.jsx) component. Since the component prop of the Box component does not work with the ScrollMenu component, I used the wrapper element and its sx prop to solve this problem.

- I used [this](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb/) exercise API from [Rapid API](https://rapidapi.com). I fetched the exercises and body parts using [Axios](https://axios-https.com) and saved them in the state to improve the performance.

- I used [React Hook Form](https://react-hook-form.com) to implement the search functionality. The library let me to avoid re-renders. I know this is not the best solution, but I wanted to try it.

- I used the local storage to save favorite exercises.

- This is general information about what i did in this project. I hope you like it :)

## Technologies

- [Vite 3](https://vitejs.dev)
- [React 18](https://reactjs.org)
- [Material UI 5](https://mui.com)
- [React Hook Form](https://react-hook-form.com)
- [Axios](https://axios-http.com)

## How To Use

To clone and run this application, you'll need Git and Node.js (which comes with npm) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/realstankle/ruby-gym.git

# Go into the repository
cd ruby-gym

# Install dependencies
npm install
```

You need to subscribe to [this api](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb) then create `.env` file in the root folder and add your Rapid API key into it:

```text
VITE_API_KEY=<your_api_key>
```

Now, you can run the app:

```bash
npm run dev
```

## Acknowledgment

This project is based on [this tutorial](https://www.youtube.com/watch?v=KBpoBc98BwM) by [JavaScript Mastery](https://www.youtube.com/channel/UCmXmlB4-HJytD7wek0Uo97A) youtube channel.

## License

[MIT](./LICENSE)
