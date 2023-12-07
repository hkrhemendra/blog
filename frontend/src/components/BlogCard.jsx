import React from "react";

const BlogCard = ({
  author,
  date,
  title,
  description,
  tags,
  orientation,
  img,
}) => {
  console.log(orientation);

  orientation = orientation ? orientation : "vertical";
  console.log(orientation);
  return (
    <div
      className={
        "col blog-card-vertical " + (orientation === "horizontal" ? "row" : "")
      }
    >
      <img
        className={"w-100 " + (orientation === "horizontal" ? "col" : "")}
        src={img}
        alt="blog"
      />
      <div
        className={"blog-post " + (orientation === "horizontal" ? "col" : "")}
      >
        <div className="blog-date my-2">
          {author} · {date}
        </div>
        <div className="d-flex justify-content-between align-items-center gap-2">
          <div className="blog-title my-2">{title}</div>
          <i class="ri-arrow-right-up-line fw-bold"></i>
        </div>
        <div className="blog-description my-2">{description}</div>
        <div className="tags">
          <ul className="d-flex gap-2">
            {tags.map((ele) => (
              <li>{ele}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
