import { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const BlogEditor = ({ blogSubmission }) => {
	const apiKey = import.meta.env.VITE_TINYMCE_API_KEY;

	const editorRef = useRef(null);
	const [content, setContent] = useState("This is the initial content of the editor.");

	const [text, setText] = useState();
	const log = () => {
		if (editorRef.current) {
			console.log(editorRef.current.getContent());
		}
	};
	const onEditorChange = function (a, editor) {
		// console.log(a);
		setContent(a);
		setText(editor.getContent({ format: "text" }));
		//console.log(editor);
	};
	return (
		<div className='w-full h-full flex flex-col justify-center items-center mt-24'>
			<div style={{ height: "80px", overflow: "auto" }}>{text}</div>

			<Editor
				onEditorChange={onEditorChange}
				apiKey={apiKey}
				value={content}
				onInit={(evt, editor) => (editorRef.current = editor)}
				// initialValue="<p>This is the initial content of the editor.</p>"
				init={{
					height: 500,
					menubar: true,
					closed: /^(br|hr|input|meta|img|link|param|area|source)$/,

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
						"undo redo | formatselect | " +
						"bold italic backcolor | alignleft aligncenter " +
						"alignright alignjustify | bullist numlist outdent indent | " +
						"removeformat | emoticons| help",
					content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
					emoticons_append: {
						custom_mind_explode: {
							keywords: ["brain", "mind", "explode", "blown"],
							char: "🤯",
						},
					},
				}}
			/>
			<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Log editor content</button>
		</div>
	);
};

export default BlogEditor;
