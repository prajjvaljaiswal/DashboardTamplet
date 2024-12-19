import BackButton from "@/components/BackButton";
import PostTable from "@/components/PostTable";

const postPage = () => {
    return ( 
        <>
        <BackButton text='Back' link='/'/>
        <PostTable/>
        </>
     );
};
 
export default postPage;