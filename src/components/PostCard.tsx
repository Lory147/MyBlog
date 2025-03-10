import Link from "next/link";

export interface Post {
  body: string;
  id: number;
  image: string;
  title: string;
  userId: number;
}

interface PostCardProps {
  post: Post;
  capitalizeFirstLetter: (text: string) => string;
  onTagClick: (tag: string) => void;
}

export default function PostCard({
  post,
  capitalizeFirstLetter,
  onTagClick,
}: PostCardProps) {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden bg-white">
      <div
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${post.image})` }}
      ></div>

      <div className="p-4">
        <h2 className="text-xl font-bold">
          <Link href={`/post/${post.id}`} className="text-blue-500">
            {capitalizeFirstLetter(post.title)}
          </Link>
        </h2>
        <p className="text-gray-700">
          {capitalizeFirstLetter(post.body).slice(0, 100) + "..."}
        </p>

        <div className="mt-2">
          {post.body
            .toLowerCase()
            .split(/\s+/)
            .slice(0, 5)
            .map((word, index) => (
              <button
                key={index}
                onClick={() => onTagClick(word)}
                className="text-blue-500 mr-2 hover:underline"
              >
                #{capitalizeFirstLetter(word)}
              </button>
            ))}
        </div>

        <Link
          href={`/post/${post.id}`}
          className="text-sm text-blue-600 underline mt-2 inline-block"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
