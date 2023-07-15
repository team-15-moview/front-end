import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import { StyledLayout } from "./style"

function PageLayout() {
  return (
    <>
      <Header/>
        <StyledLayout>
          <Outlet/>
        </StyledLayout>
      <Footer/>
    </>
  )
}

export default PageLayout