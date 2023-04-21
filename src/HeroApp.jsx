import { RouterApp } from "./routers/RouterApp"
import './index.css'
import { HeroProvider } from "./HeroContext"

function HeroApp() {

  return (
    <>
    <HeroProvider>
      <RouterApp/>
    </HeroProvider>
    </>
  )
}

export default HeroApp
