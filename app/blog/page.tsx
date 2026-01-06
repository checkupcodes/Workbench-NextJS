import PostCard from "./_components/PostCard";

export default function BlogPage() {
  const posts = [
    { title: "Merhaba Dünya", slug: "merhaba-dunya" },
    { title: "Next.js Project Structure", slug: "project-structure" }
  ];

  return (
    <div>
      <h3>Blog Ana Sayfa</h3>
      {posts.map((post) => (
        <PostCard key={post.slug} title={post.title} slug={post.slug} />
      ))}
    </div>
  );
}

