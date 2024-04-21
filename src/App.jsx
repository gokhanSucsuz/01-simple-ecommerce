import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/navbar/Navbar"
import PageContainer from "./containers/PageContainer"
import Detail from "./pages/Detail"
import Cart from "./pages/Cart"
import Search from "./pages/Search"

function App() {


  return (
    <>
      <PageContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search/:search" element={<Search />} />
        </Routes>
      </PageContainer>


    </>
  )
}

export default App
