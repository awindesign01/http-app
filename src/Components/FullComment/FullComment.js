// import axios from "axios";
import { useEffect, useState } from "react";
import { DeleteURL } from "../../Services/DeleteURL";
import { GeyDataURL } from "../../Services/GetDataURL";
import {GetURL} from "../../Services/GetURL";

const FullComment = ({ commentID, setComments, setSelectedID }) => {
	// console.log(commentID);
	const [Comment, setComment] = useState(null);
	useEffect(() => {
		if (commentID) {
				GeyDataURL(commentID).then((res) => setComment(res.data))
				.catch();
		}
	}, [commentID]);

	// const deleteHandler = () => {
	// 	axios
	// 		.delete(`http://localhost:3001/comments/${commentID}`)
	// 		.then((res) => console.log(res))
	// 		.catch((err) => console.log(err));
	// };
	// روش اول با then, catch

	const deleteHandler = async () => {
		try {
			await DeleteURL(commentID);
			const { data } = await GetURL();
			setComments(data);
			setSelectedID(null);
			setComment(null);
		} catch (error) {}
	};
	// روش دوم try, catch

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
