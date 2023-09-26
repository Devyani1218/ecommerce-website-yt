import Blogcard from "./Blogcard";

const data = [
  {
    img: "/public/images/post__1.webp",
    title: "Healthy Food Healthy Life",
    date: "Aug 27, 2023",
    comment: 8,
  },
  {
    img: "/public/images/post__2.webp",
    title: "Healthy Food Healthy Life",
    date: "Aug 25, 2023",
    comment: 1,
  },
  {
    img: "/public/images/post__3.webp",
    title: "Healthy Food Healthy Life",
    date: "Aug 1, 2023",
    comment: 6,
  },
];

const BlogSection = () => {
  return (
    <div className="container pt-16">
      <h2 className="font-bold text-2xl"> Latest News </h2>
      <p className="text-gray-600">
        Present posts in a best way to highlight interesting moments of your
        blog.
      </p>
      <div className="container pt-8">
        <div className="grid sm:grid-cols-3 gap-4">
          {data.map((el) => (
            <Blogcard
              key={el.date}
              img={el.img}
              title={el.title}
              date={el.date}
              comment={el.comment}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
