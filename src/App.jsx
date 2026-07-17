import LeftSection from "./components/LeftSection"
import RightSection from "./components/RightSection"
import { useRef } from "react"
const App = () => {
  const applicationFormRef = useRef(null)
  const inquiryFormRef = useRef(null)
  const privacyRef = useRef(null)

  const scrollToDiv = (targetRef) => {
    targetRef.current?.scrollIntoView({
      behavior: "smooth"
    })
  }
  return (
    <div className=" md:flex relative justify-end min-w-screen overflow-x-hidden ">
      <LeftSection
        applicationFormRef={applicationFormRef}
        scrollToDiv={scrollToDiv}
        privacyRef={privacyRef}
        inquiryFormRef={inquiryFormRef}
      />
      <RightSection
        applicationFormRef={applicationFormRef}
        inquiryFormRef={inquiryFormRef}
        privacyRef={privacyRef}
        scrollToDiv={scrollToDiv}
      />
    </div>
  )
}

export default App
