import Comment from "../../Components/Comment/Comment";
import FullComment from "../../Components/FullComment/FullComment";
import NewComment from "../../Components/NewComment/NewComment";
import Style from "./Descussion.module.css";
import { useEffect, useState } from "react";
// import axios from "axios";
import { toast } from "react-toastify";
import { GetURL } from "../../Services/GetURL";

const Descussion = () => {
	const [Comments, setComments] = useState(null);
	const [SelectedID, setSelectedID] = useState(null);
	const [Errorr, setErrorr] = useState(false);

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
				const { data } = await GetURL();
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

	const renderComments = () => {
		let renderedValue = <p>loading 🤔🤔🤔</p>;
		if (Errorr) {
			renderedValue = <p>fetching data failed !</p>;
			toast.error("💀 error", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}

		if (Comments && !Errorr) {
			renderedValue = Comments.map((c) => (
				<Comment
					key={c.id}
					name={c.name}
					email={c.email}
					onClick={() => selectCommentHandler(c.id)}
				/>
			));
		}
		return renderedValue;
	};
	return (
		<main>
			<section className={Style.section_Comment}>{renderComments()}</section>
			<section className={Style.section_FComment}>
				<FullComment
					commentID={SelectedID}
					setComments={setComments}
					setSelectedID={setSelectedID}
				/>
			</section>
			<section className={Style.section_NComment}>
				<NewComment setComments={setComments} />
			</section>
		</main>
	);
};

export default Descussion;
