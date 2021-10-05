// import axios from "axios";
import { useState } from "react";
import { GetURL } from "../../Services/GetURL";
import { PostURL } from "../../Services/PostURL";

const NewComment = ({ setComments }) => {
	const [Comment, setComment] = useState({
		name: "",
		email: "",
		content: "",
	});

	const contentHandler = (e) => {
		setComment({ ...Comment, [e.target.name]: e.target.value });
	};

	// const postCommentHandler = () => {
		// post(api Link, body, header)
		// api link : 👍
		// body : data(name: "", email: "", content: "",)
		// header : token(کد ملی دیجیتالی برای شناسایی اجزای کد ها) => JWT(Json Web Token)

		// axios
		// 	.post("http://localhost:3001/comments", {
		// 		...Comment,
		// 		postID: 10,
		// 	})
		// 	.then((res) => axios.get("http://localhost:3001/comments"))
		// 	.then((res) => setComments(res.data))
		// 	.catch();
	// }
	// روش اول با then, catch

	const postCommentHandler = async () => {
		// post(api Link, body, header)
		// api link : 👍
		// body : data(name: "", email: "", content: "",)
		// header : token(کد ملی دیجیتالی برای شناسایی اجزای کد ها) => JWT(Json Web Token)
		try {
			await PostURL({
				...Comment,
				postID: 10,
			});
			const { data } = await GetURL();
			setComments(data);
		} catch (error) {}
	};
	// روش دوم try, catch

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
				<button onClick={postCommentHandler}>Add Comment</button>
			</article>
		</section>
	);
};

export default NewComment;
