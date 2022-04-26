import BlogContents from "../components/Blog/BlogContents"
import Category from "../components/Category"
import Header from "../components/Header"
import Search from "../components/Search"

const BlogPage = () => {
    return(
        <div className="blog-page-container">
            <Header />
            <Category />
            <Search />
            <BlogContents />
        </div>
    )
}

export default BlogPage