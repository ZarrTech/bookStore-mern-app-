import {Home, Createbook, Editbook, Deletebook, Showbook} from './page/index.js'
import {Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<Createbook />} />
      <Route path="/books/edit/:id" element={<Editbook />} />
      <Route path="/books/delete/:id" element={<Deletebook />} />
      <Route path="/books/details/:id" element={<Showbook />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
