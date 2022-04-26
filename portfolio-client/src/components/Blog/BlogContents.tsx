import ContentsHeader from "../ContentsHeader"
import BlogList from "./BlogList"
import TopPicks from "./TopPicks"

const BlogContents = () => {
    return (
        <div className="blog-contents-container">
            <ContentsHeader />
            <TopPicks />
            <ContentsHeader />
            <BlogList />
        </div>
    )
}

export default BlogContents