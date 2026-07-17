import { useRef, useState } from "react"
import CustomButton from "./CustomButton"

const ApplicationForm = ({ formRef }) => {
  //state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
  })
  const [errorKeys, setErrorKeys] = useState([])
  const [isShowPassword, setIsShowPassword] = useState(false)

  //ref
  const lastNameRef = useRef(null)
  const emailRef = useRef(null)
  const phoneNumberRef = useRef(null)
  const passwordRef = useRef(null)
  const confirmPasswordRef = useRef(null)





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
    if (formData.phoneNumber.trim() === "") { //check phone number with regular expression
      isValidationPassed = false
      errKeys.push("phoneNumber")
    }
    if (formData.password.trim() === "") {//check password with regular expression
      isValidationPassed = false
      errKeys.push("password")
    }
    if (formData.confirmPassword.trim() === "") {//check confirm password with regular expression
      isValidationPassed = false
      errKeys.push("confirmPassword")
    }

    setErrorKeys([...errKeys])
    if (isValidationPassed) return alert("form submitted!")
  }
  return (
    <div className="my-10" ref={formRef} >
      <div className="bg-divider-bg text-white p-4 px-10 mb-10 ">
        Sell your products on our e-commerce!
      </div>
      <div className="md:px-10 px-4">
        <h1 className="text-2xl border-l-6 border-l-button-bg pl-4">
          Application Form
        </h1>
        <div className="mt-10 w-full xl:w-1/2 sm:w-3/4 flex flex-col gap-4">
          <div className="sm:flex gap-2">
            <input
              value={formData.firstName}
              type="text"
              placeholder="FirstName"
              className={`border-2 w-full border-black/10 outline-0 md:w-1/2 capitalize  p-2 rounded-xl ${errorKeys.includes("firstName") ? "border-red-400 focus:border-red-400" : "focus:border-button-bg"}`}
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
              className={`border-2 md:w-1/2 w-full sm:mt-0 mt-2 border-black/10 outline-0 capitalize  p-2 rounded-xl ${errorKeys.includes("lastName") ? "border-red-400 focus:border-red-400" : "focus:border-button-bg"}`}
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
            className={`border-2 w-full border-black/10 outline-0  p-2 rounded-xl ${errorKeys.includes("email") ? "border-red-400 focus:border-red-400" : "focus:border-button-bg"}`}
            onChange={(e) => {
              setErrorKeys(errorKeys.filter(key => key !== "email"))
              setFormData({
                ...formData,
                email: e.target.value
              })
            }}
            onKeyDown={(e) => {
              onKeyDownFormData(e.key, phoneNumberRef, formData.email, "email")
            }}
          />
          <input
            type="text"
            ref={phoneNumberRef}
            value={formData.phoneNumber}
            placeholder="Phone number"
            className={`border-2 w-full border-black/10 outline-0  p-2 rounded-xl ${errorKeys.includes("phoneNumber") ? "border-red-400 focus:border-red-400" : "focus:border-button-bg"}`}
            onChange={(e) => {
              setErrorKeys(errorKeys.filter(key => key !== "phoneNumber"))
              setFormData({
                ...formData,
                phoneNumber: e.target.value
              })
            }}
            onKeyDown={(e) => {
              onKeyDownFormData(e.key, passwordRef, formData.phoneNumber, "phoneNumber")
            }}
          />
          <input
            type={isShowPassword ? "text" : "password"}
            ref={passwordRef}
            value={formData.password}
            placeholder="Password"
            className={`border-2 w-full border-black/10 outline-0  p-2 rounded-xl ${errorKeys.includes("password") ? "border-red-400 focus:border-red-400" : "focus:border-button-bg"}`}
            onChange={(e) => {
              setErrorKeys(errorKeys.filter(key => key !== "password"))
              setFormData({
                ...formData,
                password: e.target.value
              })
            }}
            onKeyDown={(e) => {
              onKeyDownFormData(e.key, confirmPasswordRef, formData.password, "password")
            }}
          />
          <input
            type={isShowPassword ? "text" : "password"}
            ref={confirmPasswordRef}
            value={formData.confirmPassword}
            placeholder="Confirm password"
            className={`border-2 w-full border-black/10 outline-0  p-2 rounded-xl ${errorKeys.includes("confirmPassword") ? "border-red-400 focus:border-red-400" : "focus:border-button-bg"}`}
            onChange={(e) => {
              setErrorKeys(errorKeys.filter(key => key !== "confirmPassword"))
              setFormData({
                ...formData,
                confirmPassword: e.target.value
              })
            }}
            onKeyDown={(e) => {
              onKeyDownFormData(e.key, "lastRef", formData.confirmPassword, "confirmPassword")
            }}
          />
          <div className="flex gap-2 items-center ">
            <input
              type="checkbox"
              id="checkbox"
              checked={isShowPassword}
              className="cursor-pointer"
              onClick={() => { setIsShowPassword(!isShowPassword) }}
            />
            <label htmlFor="checkbox" className="text-sm cursor-pointer">Show Password</label>
          </div>

          <ul className="text-sm px-4 text-black/40">
            <li className="list-disc">password length (minimin 8 or more)</li>
            <li className="list-disc">upper and lowercase</li>
            <li className="list-disc">character (at least one special character and one number)</li>
          </ul>



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

export default ApplicationForm