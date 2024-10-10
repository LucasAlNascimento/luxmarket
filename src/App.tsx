/* eslint-disable react/react-in-jsx-scope */
import { ToastContainer } from "react-toastify"
import Header from "./components/Header/Header"
import Products from "./components/Products/Products"
import "./styles/_main.scss"

function App() {
  return(
    <main>
      <Header />
      <ToastContainer />
      <Products />
    </main>
  )
}
  



export default App
