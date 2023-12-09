import React from "react";
import BlogCard from "./BlogCard";
import SectionTitle from "./SectionTitle";
import Pagination from "./Pagination";

const Blogs = () => {
  const tags = ["Design", "Research", "Presentation"];
  return (
    <div className="container my-5">
      <SectionTitle title={"All blog posts"} />
      <div className="row row-cols-3 my-5">
        <div className="col">
          <BlogCard
            title={"Building your API Stack"}
            author={"Lana Steiner"}
            date={"1 Jan 2023"}
            description={
              "How do you create compelling presentations that wow your colleagues and impress your managers?"
            }
            img="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            tags={tags}
            orientation={"vertical"}
          />
        </div>
        <div className="col">
          <BlogCard
            title={"Building your API Stack"}
            author={"Lana Steiner"}
            date={"1 Jan 2023"}
            description={
              "How do you create compelling presentations that wow your colleagues and impress your managers?"
            }
            img="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            tags={tags}
            orientation={"vertical"}
          />
        </div>
        <div className="col">
          <BlogCard
            title={"Building your API Stack"}
            author={"Lana Steiner"}
            date={"1 Jan 2023"}
            description={
              "How do you create compelling presentations that wow your colleagues and impress your managers?"
            }
            img="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            tags={tags}
            orientation={"vertical"}
          />
        </div>
        <div className="col">
          <BlogCard
            title={"Building your API Stack"}
            author={"Lana Steiner"}
            date={"1 Jan 2023"}
            description={
              "How do you create compelling presentations that wow your colleagues and impress your managers?"
            }
            img="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            tags={tags}
            orientation={"vertical"}
          />
        </div>
        <div className="col">
          <BlogCard
            title={"Building your API Stack"}
            author={"Lana Steiner"}
            date={"1 Jan 2023"}
            description={
              "How do you create compelling presentations that wow your colleagues and impress your managers?"
            }
            img="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            tags={tags}
            orientation={"vertical"}
          />
        </div>
        <div className="col">
          <BlogCard
            title={"Building your API Stack"}
            author={"Lana Steiner"}
            date={"1 Jan 2023"}
            description={
              "How do you create compelling presentations that wow your colleagues and impress your managers?"
            }
            img="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            tags={tags}
            orientation={"vertical"}
          />
        </div>
      </div>
      <Pagination/>
    </div>
  );
};

export default Blogs;
