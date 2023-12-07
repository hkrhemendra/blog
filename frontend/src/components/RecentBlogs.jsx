import React from "react";
import SectionTitle from "./SectionTitle";
import BlogCard from "./BlogCard";

const RecentBlogs = () => {
  const tags = ["Design", "Research", "Presentation"];
  return (
    <div>
      <SectionTitle title={"Recent blog posts"} />
      <div className="row my-4">
        <BlogCard
          title={"UX review presentations"}
          author={"Olivia Rhyne"}
          date={"1 Jan 2023"}
          description={
            "How do you create compelling presentations that wow your colleagues and impress your managers?"
          }
          img="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          tags={tags}
        />
        <div className="col">
          <div className="mb-2">
            {" "}
            <BlogCard
              title={"Migrating to Linear 101"}
              author={"PHoenix Baker"}
              date={"1 Jan 2023"}
              description={
                "How do you create compelling presentations that wow your colleagues and impress your managers?"
              }
              img="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaHxlbnwwfDB8MHx8fDA%3D"
              tags={tags}
              orientation={"horizontal"}
            />{" "}
          </div>
          <div>
            {" "}
            <BlogCard
              title={"Building your API Stack"}
              author={"Lana Steiner"}
              date={"1 Jan 2023"}
              description={
                "How do you create compelling presentations that wow your colleagues and impress your managers?"
              }
              img="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              tags={tags}
              orientation={"horizontal"}
            />{" "}
          </div>
        </div>
      </div>
      <BlogCard
        title={"Building your API Stack"}
        author={"Lana Steiner"}
        date={"1 Jan 2023"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
        }
        img="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        tags={tags}
        orientation={"horizontal"}
      />
    </div>
  );
};

export default RecentBlogs;
