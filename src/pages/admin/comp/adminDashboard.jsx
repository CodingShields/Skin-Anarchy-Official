const AdminDashboard = ({ open }) => {
	if(!open) return null
	return (
		<div className='flex flex-col justify-start items-start min-h-screen w-full'>
			<p className='text-center text-4xl font-normal font-montserrat uppercase text-gray-700 w-full border-b-2 border-black py-4 tracking-widest'>
				Skin Anarchy Admin Dashboard
			</p>
		</div>
	);
};

export default AdminDashboard;
