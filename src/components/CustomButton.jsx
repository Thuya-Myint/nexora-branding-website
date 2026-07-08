const CustomButton = ({ text = "", icon, onClick = () => { console.log("no function!") }, extraClass = "" }) => {
  return (
    <button className={`transition-all duration-150 bg-button-bg px-6 py-1 cursor-pointer rounded-full text-white flex justify-center items-center  gap-2 shadow-md shadow-white/20 hover:shadow-white/10 hover:shadow-xl active:text-white/50 ${extraClass}`}
      onClick={onClick}>
      {text}
      {icon && icon}
    </button>
  )
}

export default CustomButton