import Comment from "../../Components/Comment/Comment";
import FullComment from "../../Components/FullComment/FullComment";
import NewComment from "../../Components/NewComment/NewComment";
import Style from "./Descussion.module.css";

const Descussion = () => {
    return ( 
        <main>
            <section className={Style.section_Comment}>
                <Comment/>
            </section>
            <section className={Style.section_FComment}>
                <FullComment/>
            </section>
            <section className={Style.section_NComment}>
                <NewComment/>
            </section>
        </main>
     );
}
 
export default Descussion;