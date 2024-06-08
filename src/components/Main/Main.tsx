import React, { useEffect, useState } from "react";
// import { posts } from '../../data/posts';
import styles from "./Main.module.css";
import { Link } from "react-router-dom";
import { Post, PostsType } from "../../data/post";

const Main = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // APIでpostsを取得する処理をuseEffectで実行します。
  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch(
        "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts"
      );
      const data = await res.json() as PostsType;
      // console.log(data);
      setPosts(data.posts);
      setIsLoading(false);
    };

    fetcher();
  }, []);

  //読み込み中の表示
  if (isLoading) {
    return <div>読み込み中…</div>
  }

  return (
    <div className={styles.mainContainer}>
      <ul className={styles.posts}>
        {posts.map((post) => {
          return (
            <li key={post.id} className={styles.mainList}>
              <Link to={`/posts/${post.id}`} className={styles.mainLink}>
                <div className={styles.postContainer}>
                  <div className={styles.post}>
                    <div className={styles.dateAndCategories}>
                      <p className={styles.date}>
                        {new Date(post.createdAt).toLocaleDateString()}
                      </p>
                      <ul className={styles.categories}>
                        {post.categories.map((category) => {
                          return (
                            <li
                              key={category}
                              className={styles.categoriesList}
                            >
                              {category}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div
                      className={styles.title}
                    >{`APIで取得した${post.title}`}</div>
                    <div
                      className={styles.content}
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    ></div>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Main;
