export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  
  return (
    <div>
      <h2>Blog Detay Sayfası</h2>
      <p>Slug: {slug}</p>
      <p>Bu sayfa dinamik olarak slug üzerinden gelir.</p>
    </div>
  );
}

