import Blogs from "@/components/blog/Blogs";
import PageTitle from "@/components/shared/PageTitle";

export default function BlogPage() {
  return (
    <main className="px-4">
      <PageTitle
        title="Language Learning Blog"
        subtitle="Insights, tips, and stories to enhance your language learning journey"
      />
      <Blogs />
    </main>
  );
}
