import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/navbar/Navbar"
import PageContainer from "./containers/PageContainer"
import Detail from "./pages/Detail"

function App() {


  return (
    <>
      <PageContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Detail />} />
        </Routes>
      </PageContainer>


    </>
  )
}

export default App
