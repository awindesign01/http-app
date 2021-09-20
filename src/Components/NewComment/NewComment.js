const NewComment = () => {
	return (
		<section>
			<article>
				<label>Name : </label>
				<input type="text" />
			</article>
			<article>
				<label>Email : </label>
				<input type="email" />
			</article>
			<article>
				<label>Content : </label>
				<textarea cols="30" rows="3"></textarea>
			</article>
			<article>
				<button>Add</button>
			</article>
		</section>
	);
};

export default NewComment;
