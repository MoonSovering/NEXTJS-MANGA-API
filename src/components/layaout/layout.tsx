import { Providers } from "@/app/providers"
import NavBar from "../navbar/navbar"
import Footer from "../footer/footer"


function Layout({ children }) {
  return (
    <Providers>
        <NavBar />
            <main>{children}</main>
        <Footer />
    </Providers>

  )
}

export default Layout
