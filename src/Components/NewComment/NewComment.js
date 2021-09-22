// import axios from "axios";
import { useState } from "react";

const NewComment = ({onAddPost}) => {
	const [Comment, setComment] = useState({
		name: "",
		email: "",
		content: "",
	});

	const contentHandler = (e) => {
		setComment({ ...Comment, [e.target.name]: e.target.value });
	};

	return (
		<section>
			<article>
				<label>Name : </label>
				<input type="text" name="name" onChange={contentHandler} />
			</article>
			<article>
				<label>Email : </label>
				<input type="email" name="email" onChange={contentHandler} />
			</article>
			<article>
				<label>Content : </label>
				<textarea
					cols="30"
					rows="3"
					name="textarea"
					onChange={contentHandler}
				></textarea>
			</article>
			<article>
				<button onClick={() => onAddPost(Comment)}>Add Comment</button>
			</article>
		</section>
	);
};

export default NewComment;
