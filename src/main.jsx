import { createRoot } from 'react-dom/client';
import App from './App.jsx'
// import './index.css'
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
// import PortfolioPage from './pages/PortfolioPage.jsx'
// import ResumePage from './pages/ResumePage.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PortfolioPage from './pages/PortfolioPage.jsx';
import ResumePage from './pages/ResumePage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutPage/>,
      },
      {
        path: 'contact',
        element: <ContactPage/>
      },
      {
        path: 'portfolio',
        element: <PortfolioPage/>
      },
      {
        path: 'resume',
        element: <ResumePage/>
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

