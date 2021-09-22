import axios from "axios";
import { useEffect, useState } from "react";

const FullComment = ({ commentID }) => {
	// console.log(commentID);
	const [Comment, setComment] = useState(null);
	useEffect(() => {
		if (commentID) {
			axios
				.get(`http://localhost:3001/comments/${commentID}`)
				.then((res) => setComment(res.data))
				.catch();
		}
	}, [commentID]);

	const deleteHandler = () => {
		axios
			.delete(`http://localhost:3001/comments/${commentID}`)
			.then((res) => console.log(res))
			.catch();
	};

	const styleP = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		color: commentID ? "red" : "#222",
	};
	let commentDetails = <p style={styleP}>please select a comment 🙏🙏🙏</p>;
	if (commentID) commentDetails = <p>loading 🤔🤔🤔</p>;
	if (Comment) {
		commentDetails = (
			<section>
				<h3>Name : {Comment.name}</h3>
				<p>email : {Comment.email}</p>
				<p>body : {Comment.body}</p>
				<button onClick={deleteHandler}>delete</button>
			</section>
		);
	}
	return commentDetails;
};

export default FullComment;
