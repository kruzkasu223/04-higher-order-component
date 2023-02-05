# 04/27-higher-order-component

This project is all about using Higher Order Components (HOCs) to manage and pass down any data (in our case it'll be user data) in a React application. I will be working on implementing a `withUserData` HOC that can be used to pass down user information to component.

I will use [React](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/) and [vite bundler](https://vitejs.dev/). and will use [https://randomuser.me](https://randomuser.me) api for user fetching.

(**Note**: I would not recommend using HOCs for just passing down the data, It was better option in era of class based component, but you should use custom hooks or some state management solutions, this was only for learning purpose. You can still use HOCs for prop or component manipulation purpose. This is still my own opinion, you can use whatever and whenever you want. btw, writting types with HOC was really painful, it's not much if you just look at it, but it's pain when you work with it.)

If you are interested, checkout [#28Days28Projects](https://github.com/kruzkasu223/28Days28Projects) for more projects like this.
