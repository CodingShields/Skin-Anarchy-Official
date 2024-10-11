const BlogTitle = ({ children }) => {
	return (
		<div className="flex flex-col h-full justify-center items-center">
			<h1 className="text-3xl font-bold text-red-500 mb-2 text-center py-2">
				{children}
			</h1>
		</div>
	);
};

export default BlogTitle;
