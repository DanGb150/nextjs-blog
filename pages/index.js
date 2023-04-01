import Head from "next/head";
import Hero from "../components/Home/hero";
import FeaturedPosts from "../components/Home/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Danny&lsquo;s Blog</title>
        <meta
          name="description"
          content="I post about programming and web development"
        ></meta>
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
