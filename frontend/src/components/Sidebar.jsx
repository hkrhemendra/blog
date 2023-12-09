import React from "react";
import BlogCard from "./BlogCard";
import SectionTitle from "./SectionTitle";

const Sidebar = () => {
  const tags = ["Design", "Research", "Presentation"];
  return (
    <div className="d-flex flex-column">
      <SectionTitle title={"Recent blog posts"} />
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
    </div>
  );
};

export default Sidebar;
