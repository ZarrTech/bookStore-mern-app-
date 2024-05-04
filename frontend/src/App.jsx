import {Home, Createbook, Editbook, Deletebook, Showbook} from './page/index.js'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/' element={ <Home/>} />
      <Route path='/books/create' element={ <Createbook/>}/>
      <Route path='/books/edit/:id' element={ <Editbook/>}/>
      <Route path='/books/delete/:id' element={<Deletebook/> }/>
      <Route path='/books/details/:id' element={ <Showbook/>}/>
    </Routes>
  )
}

export default App
