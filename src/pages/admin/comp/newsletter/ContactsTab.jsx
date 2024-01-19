import { useState } from "react";

const ContactsTab = () => {
	return (
		<div className='flex flex-col items-center justify-center w-full h-fit space-x-4'>
			<h1 className='text-2xl font-bold text-gray-700 my-2'>Users</h1>

			<select className='w-fit h-12 px-12  text-black bg-gray-200 rounded-lg'>
				<option>Choose One</option>
				<option>All Contacts</option>
				<option>Admins</option>
				<option>All Members</option>
				<option>All Sub Members</option>
				<option>All Non-Sub Members</option>
			</select>
			<div className='w-11/12 h-fit overflow-y-scroll border-4 border-black mt-4'>
				<table className=' w-full '>
					<thead>
						<tr className='border-b-2 border-black text-xl '>
							<th className='w-fit h-12'>Select All</th>
							<th>Name</th>
							<th>Email</th>
							<th>Subscription</th>
							<th>Add BCC</th>
							<th>Delete BCC</th>
						</tr>
					</thead>

					<tbody>
						<tr className='border-b-2 border-black'>
							<button className='w-4 h-4' type='checkbox'></button>
							<td>John Doe</td>
							<td> JohnDoe@gmail.com</td>
							<td>True/False</td>
							<td>
								<button className='w-4 h-4' type='checkbox'></button>
							</td>
							<td>
								<button className='w-4 h-4' type='checkbox'></button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ContactsTab;
