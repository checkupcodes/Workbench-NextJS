import Link from "next/link";

export default function PostCard({ title, slug }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <Link href={`/blog/${slug}`}>
        <strong>{title}</strong>
      </Link>
    </div>
  );
}

