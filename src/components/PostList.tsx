import { JSX } from "react";
import PostCard, { Post } from "./PostCard";

interface PostListProps {
  posts: Post[];
  tags: string[];
  highlightText: (
    text: string,
    wordsToHighlight: string[]
  ) => JSX.Element | string;
  capitalizeFirstLetter: (text: string) => string;
  onTagClick: (tag: string) => void;
}

export default function PostList({
  posts,
  tags,
  highlightText,
  capitalizeFirstLetter,
  onTagClick,
}: PostListProps) {
  return (
    <div className="grid md:grid-cols-3 gap-8 mt-6 px-8">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          tags={tags}
          highlightText={highlightText}
          capitalizeFirstLetter={capitalizeFirstLetter}
          onTagClick={onTagClick}
        />
      ))}
    </div>
  );
}
