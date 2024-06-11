import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./DetailPost.module.css";
import type { Post } from "../../data/post";

export const DetailPost: React.FC = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams<string>();

  // APIでpostsを取得する処理をuseEffectで実行します。
  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch(
        `https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`
      );
      const data: {post: Post}= await res.json();
      setPost(data.post);
      setIsLoading(false);
    };

    fetcher();
  }, [id]);

  //ローディング中の表示
  if (isLoading) {
    return <div>読み込み中…</div>;
  }

  //記事が見つからなかったとき
  if (!post) {
    return <div>記事が見つかりません</div>;
  }

  return (
    <div className={styles.container}>
      <img src={post.thumbnailUrl} alt="thumbnail"/>
      <div className={styles.article}>
        <div className={styles.dateAndCategories}>
          <p className={styles.date}>
            {new Date(post.createdAt).toLocaleDateString()}
          </p>
          <ul className={styles.categories}>
            {post.categories.map((category) => {
              return <li key={category}>{category}</li>;
            })}
          </ul>
        </div>
        <h3 className={styles.title}>{`APIで取得した${post.title}`}</h3>
        <div
          className="detailContent"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
      </div>
    </div>
  );
};

export default DetailPost;
