import Header from "./components/Header/Header"
import InstagramEditPage from "./components/Instagram/InstagramEditPage"
import SocialTablist from "./components/SocialTablist/SocialTablist"

const page = () => {
  return (
    <div>
      <Header/>
      <SocialTablist/>
      <InstagramEditPage/>
    </div>
  )
}

export default page