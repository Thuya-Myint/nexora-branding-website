import { useRef, useState } from "react"
import CustomButton from "./CustomButton"

const InquiryForm = ({ formRef }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    description: "",
  })
  const [errorKeys, setErrorKeys] = useState([])
  const lastNameRef = useRef(null)
  const emailRef = useRef(null)
  const subjectRef = useRef(null)
  const descriptionRef = useRef(null)



  const onKeyDownFormData = (keyEntered, ref, value, key) => {
    if (value.trim() === "") {
      !errorKeys.includes(key) && setErrorKeys([...errorKeys, key])
      return
    }
    if (ref === "lastRef" && keyEntered === "Enter") {
      return submitForm()
    }
    if (keyEntered === "Enter") {
      ref.current?.focus()
    }
  }

  const submitForm = () => {
    let isValidationPassed = true

    let errKeys = []
    if (formData.firstName.trim() === "") {
      isValidationPassed = false
      errKeys.push("firstName")
    }
    if (formData.lastName.trim() === "") {
      isValidationPassed = false
      errKeys.push("lastName")

    }
    if (formData.email.trim() === "") {
      isValidationPassed = false
      errKeys.push("email")
    }
    if (formData.subject.trim() === "") {
      isValidationPassed = false
      errKeys.push("subject")
    }
    if (formData.description.trim() === "") {
      isValidationPassed = false
      errKeys.push("description")
    }
    setErrorKeys([...errKeys])
    if (isValidationPassed) return alert("form submitted!")
  }
  return (
    <div className="mt-10" ref={formRef} >
      <div className="bg-divider-bg text-white p-4 px-10 mb-10 ">
        Inquire anything you want to know!
      </div>
      <div className="px-10">
        <h1 className="text-2xl border-l-6 border-l-button-bg pl-4 ">
          Inquiry
        </h1>
        <div className="mt-10 w-100 flex flex-col gap-4">
          <div className="flex gap-2">
            <input
              value={formData.firstName}
              type="text"
              placeholder="FirstName"
              className={`border-2 border-black/10 outline-0 capitalize  p-2 rounded-xl ${errorKeys.includes("firstName") ? "border-red-400 focus:border-red-400" : "focus:border-button-bg"}`}
              onChange={(e) => {
                setErrorKeys(errorKeys.filter(key => key !== "firstName"))
                setFormData({
                  ...formData,
                  firstName: e.target.value
                })
              }}
              onKeyDown={(e) => {
                onKeyDownFormData(e.key, lastNameRef, formData.firstName, "firstName")
              }}
            />
            <input
              ref={lastNameRef}
              value={formData.lastName}
              type="text"
              placeholder="lastName"
              className={`border-2 border-black/10 outline-0 capitalize  p-2 rounded-xl ${errorKeys.includes("lastName") ? "border-red-400 focus:border-red-400" : "focus:border-button-bg"}`}
              onChange={(e) => {
                setErrorKeys(errorKeys.filter(key => key !== "lastName"))
                setFormData({
                  ...formData,
                  lastName: e.target.value
                })
              }}

              onKeyDown={(e) => {
                onKeyDownFormData(e.key, emailRef, formData.lastName, "lastName")
              }}
            />
          </div>
          <input
            type="email"
            ref={emailRef}
            value={formData.email}
            placeholder="Email"
            className={`border-2 border-black/10 outline-0  p-2 rounded-xl ${errorKeys.includes("email") ? "border-red-400 focus:border-red-400" : "focus:border-button-bg"}`}
            onChange={(e) => {
              setErrorKeys(errorKeys.filter(key => key !== "email"))
              setFormData({
                ...formData,
                email: e.target.value
              })
            }}
            onKeyDown={(e) => {
              onKeyDownFormData(e.key, subjectRef, formData.email, "email")
            }}
          />
          <input
            type="text"
            ref={subjectRef}
            value={formData.subject}
            placeholder="Subject or Title"
            className={`border-2 border-black/10 outline-0  p-2 rounded-xl ${errorKeys.includes("subject") ? "border-red-400 focus:border-red-400" : "focus:border-button-bg"}`}
            onChange={(e) => {
              setErrorKeys(errorKeys.filter(key => key !== "subject"))
              setFormData({
                ...formData,
                subject: e.target.value
              })
            }}
            onKeyDown={(e) => {
              onKeyDownFormData(e.key, descriptionRef, formData.subject, "subject")
            }}
          />
          <textarea
            value={formData.description}
            ref={descriptionRef}
            name="description"
            placeholder="description"
            className={`border-2 border-black/10 outline-0  p-2 rounded-xl ${errorKeys.includes("description") ? "border-red-400 focus:border-red-400" : "focus:border-button-bg"}`}
            onChange={(e) => {
              setErrorKeys(errorKeys.filter(key => key !== "description"))
              setFormData({
                ...formData,
                description: e.target.value
              })
            }}
            onKeyDown={(e) => {
              onKeyDownFormData(e.key, "lastRef", formData.description, "description")
            }}
          />

          <CustomButton
            text={"Submit"}
            extraClass={"h-10"}
            onClick={submitForm}
          />

        </div>
      </div>
    </div>
  )
}

export default InquiryForm