




const ScienceAwards = ({children, active}) => {
    


    return (
        <div className={`animate-fadeIn h-full grid grid-cols-3 mx-auto mb-36 gap-8 w-3/4 ${active === "2022" || active === "2023" ? "bg-char-900 py-4" : "bg-black"}`}>
        {children}
        </div>
    )
}

export default ScienceAwards