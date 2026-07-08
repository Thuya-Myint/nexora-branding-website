import { useState } from "react"
import CustomButton from "./CustomButton"

const InquiryForm = ({ formRef }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    description: "",
  })
  return (
    <form className="mt-10" ref={formRef}>
      <h1 className="text-2xl border-l-6 border-l-button-bg pl-4">
        Inquiry
      </h1>
      <div className="mt-10 w-100 flex flex-col gap-4">
        <div className="flex gap-2">
          <input
            value={formData.firstName}
            type="text"
            placeholder="FirstName"
            className="border-2 border-black/10 p-2 rounded-xl"
          />
          <input
            value={formData.lastName}
            type="text"
            placeholder="lastName"
            className="border-2 border-black/10 p-2 rounded-xl"
          />
        </div>
        <input
          type="email"
          value={formData.email}
          placeholder="Email"
          className="border-2 w-full border-black/10 p-2 rounded-xl"
        />
        <input
          type="text"
          value={formData.subject}
          placeholder="Subject or Title"
          className="border-2 w-full border-black/10 p-2 rounded-xl"
        />
        <textarea
          name="description"
          placeholder="description"
          className="border-2 w-full border-black/10 p-2 rounded-xl"
        />

        <CustomButton
          text={"Submit"}
          extraClass={"h-10"}
        />

      </div>
    </form>
  )
}

export default InquiryForm