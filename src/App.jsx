import Root from './routes/Root.jsx';
import About from './routes/About.jsx';
import Projects from './routes/Projects.jsx';
import Error from './routes/Error.jsx';
import Iconique from './routes/Iconique.jsx';
import {Header, Footer} from './components/index.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/projects/iconique',
    element: <Iconique />
  },
  {
    path: '/projects/nutrition scanner',
    element: <p style={{color: 'white'}}>Nutrition Scanner</p>
  },
  {
    path: '/projects/canvas quiz grader',
    element: <p style={{color: 'white'}}>Quiz Grader</p>
  },
  
]);

function App() {
  return (<>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </>)
}

export default App
