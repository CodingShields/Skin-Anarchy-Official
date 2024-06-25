import { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { image } from "@cloudinary/url-gen/qualifiers/source";

const BlogEditor = ({ blogSubmission }) => {
	const [blog, setBlog] = useState();
	console.log(blog);
	const apiKey = import.meta.env.VITE_TINYMCE_API_KEY;

	const editorRef = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		blogSubmission(blog);
	};

	return (
		<div className='w-full h-full flex flex-col justify-center items-center mt-24'>
			<Editor
				onEditorChange={(content, editor) => {
					setBlog(content);
					console.log("Content was updated:", content);
				}}
				selector='textarea'
				apiKey={apiKey}
				onInit={(evt, editor) => {
					const content = editor.getContent();
					console.log("Initial content:", content);
				}}
				init={{
					closed: /^(br|hr|input|meta|img|link|param|area|source)$/,
					doctype: "<!DOCTYPE html>",
					height: 500,
					menubar: true,
					plugins: [
						"advlist",
						"autolink",
						"lists",
						"link",
						"image",
						"charmap",
						"preview",
						"anchor",
						"searchreplace",
						"visualblocks",
						"code",
						"fullscreen",
						"insertdatetime",
						"media",
						"table",
						"code",
						"help",
						"wordcount",
					],
					toolbar:
						"undo redo | formatselect | bold italic forecolor | alignleft aligncenter " +
						"alignright alignjustify | bullist numlist outdent indent | " +
						"removeformat | image link | help",
					init_instance_callback: function (editor) {
						editor.on("BeforeSetContent", function (e) {
							console.log(e.content.substr(0, 4));
							if (e.content.substr(0, 4) === "<img") {
								let imgTag = e.content;
								let wrappedTag = `<div class="foo">${imgTag}</div>`;
								console.log(wrappedTag);
								return (e.content = wrappedTag);
							}
						});
					},
					content_style: "body { font-family: Montserrat,Helvetica,Arial,sans-serif; font-size:14px }",
				}}
			/>
			<button onClick={handleSubmit} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
				Log editor content
			</button>
		</div>
	);
};

export default BlogEditor;
