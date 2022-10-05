import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Products';
import Main from './Layout/Main';
import Friends from './Components/Friends';
import FriendDetails from './Components/FriendDetails';
import Post from './Components/Post';
import PostDetails from './Components/PostDetails';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>, 
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/home", element: <Home></Home> },
        { path: "/products", element: <Products></Products> },
        {
         path: "friends",
         loader: async () =>{
          return fetch("https://jsonplaceholder.typicode.com/users");
         },
         element: <Friends></Friends> },
        {
          path: '/friend/:friendId',
          loader: ({params}) =>{
            // console.log(params.friendId)
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`);
            
          },
          element: <FriendDetails></FriendDetails>
        },
       {
        path: '/post',
        loader: () =>{
          return fetch("https://jsonplaceholder.typicode.com/posts");
        },
        element: <Post></Post>
       },
       {
        path:'/post/:postId',
        loader: async ({params})=>{
          return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
        },
        element: <PostDetails></PostDetails>
       }
      ],
    },

    { path: "/about", element: <About></About> },
    {path: '*', element: <div>Opps! Something is wrong here. Please try again.</div>}
  ]);
  
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>  
    </div>
  );
}

export default App;
