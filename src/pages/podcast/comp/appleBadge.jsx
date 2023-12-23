const AppleBadge = () => {
	return (
		<div className='apple-badge'>
			<a
				href='https://podcasts.apple.com/us/podcast/skincare-anarchy/id1522162686?itsct=podcast_box_badge&amp;itscg=30200&amp;ls=1'
				style={{
					display: "inline-block",
					overflow: "hidden",
					borderRadius: "13px",
					width: "250px",
					height: "83px",
				}}
			>
				<img
					src='https://tools.applemediaservices.com/api/badges/listen-on-apple-podcasts/badge/en-us?size=250x83&amp;releaseDate=1702504800'
					alt='Listen on Apple Podcasts'
					style={{
						borderRadius: "13px",
						width: "250px",
						height: "83px",
					}}
				/>
			</a>
		</div>
	);
};
