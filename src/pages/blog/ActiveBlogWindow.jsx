



const ActiveBlogWindow = ({ open, close, data }) => {
    
                



    return (
			<div
				onClick={close}
				className={open ? "fixed w-full h-full top-0 z-10 animate-fadeIn " : "animate-fadeOut absolute  w-full h-screen top-0 -z-10"}
			>
				<div className='w-full h-full flex flex-col justify-center items-center '>
					<div className='w-fit h-[900px] bg-white shadow-black shadow-2xl rounded-xl '>
						<iframe srcDoc={data} className='w-[800px] h-full  z-20  ' scrolling='yes' />
					</div>
				</div>
			</div>
		);
}

export default ActiveBlogWindow