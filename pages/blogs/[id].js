import { blogdata } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import { Title, TitleSm } from "@/components/common/Title";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const SinglePost = () => {
  const router = useRouter();
  const { id } = router.query;

  const post = blogdata.find((post) => post.id === parseInt(id));

  if (!post) {
    return (
      <>
        <Head>
          <title>Post Not Found</title>
        </Head>
        <section className="post-details bg-top">
          <div className="container">
            <h1>Sorry, blog post not found.</h1>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className="post-details bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="TIPS & TRICKS / JANUARY 12, 2022" />
            <br />
            <br />
            <Title title={post.title} className="title-bg" />
            <div className="img py">
              <img
                src={post.cover}
                alt={post.title}
                width="100%"
                height="100%"
                className="round"
              />
            </div>
            <div className="desc">
              <TitleSm title="Phasellus at magna - elit tristique lacinia. Integer a justo vitae arcu fermentum consequat." />
              <p className="desc-p">
                Nulla iaculis convallis fermentum. Suspendisse eget elit mauris...
              </p>
              <p className="desc-p">
                Suspendisse eget elit mauris. Phasellus velit nisi...
              </p>
              <p className="desc-p">
                Quisque congue ante in consequat auctor. Morbi ut accumsan eros...
              </p>
            </div>
          </div>
          <Banner />

          <div className="heading-title">
            <div className="desc">
              <TitleSm title="Integer a justo vitae arcu fermentum..." />
              <p className="desc-p">
                Phasellus nec tempor neque. In nec finibus lorem...
              </p>
              <p className="desc-p">
                Morbi finibus velit erat, a pulvinar lacus mollis sit amet...
              </p>
              <p className="desc-p">
                Suspendisse eget elit mauris. Phasellus velit nisi...
              </p>
              <p className="desc-p">
                Quisque congue ante in consequat auctor. Morbi ut accumsan eros...
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SinglePost;
