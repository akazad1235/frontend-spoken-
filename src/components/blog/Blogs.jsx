import FirstBlogCard from "../cards/FirstBlogCard";
import BlogCard from "../cards/BlogCard";
import { blogs } from "@/data/dummyBlogs";
import Container from "../shared/Container";

export default function Blogs() {
  return (
    <section className="">
      <FirstBlogCard />
      <Container>
        <div className="grid grid-cols-1 gap-8 py-16 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </Container>
    </section>
  );
}
