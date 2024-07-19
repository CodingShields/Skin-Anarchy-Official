

const EpisodeCard = (props) => {
    const {children, onClick, data, image, icon, open} = props
    return (
			<div
				onClick={onClick}
				className={`inline-flex mx-auto my-4 border border-white rounded-l-2xl transition-all duration-700 ease-in-out overflow-hidden ${open ? "w-[900px] left-1/4 min-h-64 shadow-2xl shadow-white/50" : "w-96 min-h-24  block"}`}
			>
				{children}
			</div>
		);


}


export default EpisodeCard