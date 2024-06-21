import { useState, useEffect } from "react";

const UserNotifications = ({ notificationsData }) => {
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: false,
		success: false,
		loadProfile: false,
	});
	const [notifications, setNotifications] = useState(notificationsData);


	useEffect(() => {
		if (notificationsData) {
			setNotifications(notificationsData);
		} else {
			setNotifications([]);
		}
	}, [notificationsData]);

	return (
		<>
			{notifications?.map((item, index) => {
				return (
					<div
						key={index}
						className='bg-black text-white hover:text-black hover:bg-white transition-all ease-in-out duration-700 group flex flex-col w-[690px] justify-center items-center hover:h-[350px] h-36 overflow-hidden ring-1 ring-white rounded-lg px-12 font-montserrat py-4 mx-auto mb-4'
					>
						<h1 className='text-3xl font-thin uppercase group-hover:font-normal h-fit w-full group-hover:border-black border-b mb-8 pb-2 text-center'>
							Notifications
						</h1>
						<div className='group-hover:flex flex-row w-fit gap-2 mx-auto text-center group-hover:visible hidden'>
							<div className='flex flex-col  w-full items-end justify-center whitespace-nowrap space-y-4'>
								<p className='uppercase tracking-widest font-thin group-hover:font-normal'>New Blog Notification:</p>
								<p className='uppercase tracking-widest font-thin group-hover:font-normal'>New Podcast Notification:</p>
								<p className='uppercase tracking-widest font-thin group-hover:font-normal'>Upcoming Guests & Events:</p>
								<p className='uppercase tracking-widest font-thin group-hover:font-normal'>Weekly Newsletter:</p>
							</div>
							<div className='flex flex-col  w-full items-start justify-center mr-12 space-y-4'>
								<p>{item.blogNotification ? "Enabled" : "Disabled"}</p>
								<p>{item.blogNotification ? "Enabled" : "Disabled"}</p>
								<p>{item.upComingNotifications ? "Enabled" : "Disabled"}</p>
								<p>{item.weeklyNewsletterNotification ? "Enabled" : "Disabled"}</p>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default UserNotifications;



{/* <div
	key={index}
	className='bg-black text-white hover:text-black hover:bg-white transition-all ease-in-out duration-500 group flex flex-col w-[690px] justify-center items-center hover:h-fit h-36 overflow-hidden ring-1 ring-white rounded-lg px-12 font-montserrat py-4 mx-auto mb-4'
>
	<h1 className='text-3xl font-thin uppercase group-hover:font-normal h-fit w-full group-hover:border-black border-b mb-8 pb-2 text-center'>
		Notifications
	</h1>
	<div className='group-hover:flex flex-row w-fit gap-2 mx-auto text-center group-hover:visible hidden'>
		<div className='flex flex-col  w-full items-end justify-center whitespace-nowrap space-y-4'>
			<p className='uppercase tracking-widest font-thin group-hover:font-normal'>New Blog Notification:</p>
			<p className='uppercase tracking-widest font-thin group-hover:font-normal'>New Podcast Notification:</p>
			<p className='uppercase tracking-widest font-thin group-hover:font-normal'>Upcoming Guests & Events:</p>
			<p className='uppercase tracking-widest font-thin group-hover:font-normal'>Weekly Newsletter:</p>
		</div>
		<div className='flex flex-col  w-full items-start justify-center mr-12 space-y-4'>
			<p>{item.blogNotification ? "Enabled" : "Disabled"}</p>
			<p>{item.blogNotification ? "Enabled" : "Disabled"}</p>
			<p>{item.upComingNotifications ? "Enabled" : "Disabled"}</p>
			<p>{item.weeklyNewsletterNotification ? "Enabled" : "Disabled"}</p>
		</div>
	</div>
</div>; */}
