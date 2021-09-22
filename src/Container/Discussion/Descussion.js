import Comment from "../../Components/Comment/Comment";
import FullComment from "../../Components/FullComment/FullComment";
import NewComment from "../../Components/NewComment/NewComment";
import Style from "./Descussion.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Descussion = () => {
	const [Comments, setComments] = useState(null);
	const [SelectedID, setSelectedID] = useState(null);
	const [Errorr, setErrorr] = useState(fulse)
	
	useEffect(() => {
		// then, catch
		// axios
		// 	.get("https://jsonplaceholder.typicode.com/comments")
		// 	.then((res) => {
		// 		setComments(res.data.slice(0, 4));
		// 	})
		// 	.catch((err) => console.log(err));
		const getComments = async () => {
			// async, await => (try, catch)
			try {
				const { data } = await axios.get(
					"http://localhost:3001/comments"
				);
				setComments(data.slice(0, 4));
			} catch (error) {
				console.log(error);
				setErrorr(true);
			}
		};

		getComments();
	}, []);

	const selectCommentHandler = (id) => {
		// console.log(id);
		setSelectedID(id);
	};

	const postCommentHandler = () => {
		// post(api Link, body, header)
		// api link : 👍
		// body : data(name: "", email: "", content: "",)
		// header : token(کد ملی دیجیتالی برای شناسایی اجزای کد ها) => JWT(Json Web Token)
		axios
			.post("http://localhost:3001/comments", {
				...Comment,
				postID: 10,
			})
			.then((res) => axios.get("http://localhost:3001/comments"))
			.then((res) => setComments(res.data))
			.catch();
	};

	return (
		<main>
			<section className={Style.section_Comment}>
				{Comments ? (
					Comments.map((c) => (
						<Comment
							key={c.id}
							name={c.name}
							email={c.email}
							onClick={() => selectCommentHandler(c.id)}
						/>
					))
				) : (
					<p>loading 🤔🤔🤔</p>
				)}
			</section>
			<section className={Style.section_FComment}>
				<FullComment commentID={SelectedID} />
			</section>
			<section className={Style.section_NComment}>
				<NewComment onAddPost={postCommentHandler}/>
			</section>
		</main>
	);
};

export default Descussion;
