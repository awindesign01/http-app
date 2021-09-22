const Comment = ({name, email, onClick}) => {
    return ( 
        <section onClick={onClick}>
            <h3>Name : {name}</h3>
            <p>email : {email}</p>
        </section>
     );
}
 
export default Comment;