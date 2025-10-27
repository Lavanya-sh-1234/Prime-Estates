import Image from "next/image";

interface Blog {
  id: number;
  title: string;
  author: string;
  date: string;
  description: string;
  tags: string[];
  image: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "Conversation with Raymond Realty and Oberai Reality",
    author: "Yash Tripathi",
    date: "16 October 2025",
    description:
      "We sat down with London’s fast-growing brand and product design details, lorem ipsum.",
    tags: ["Design", "Research", "Interviews"],
    image: "/blogImg1.jpg",
  },
  {
    id: 2,
    title: "Conversation with Raymond Realty and Oberai Reality",
    author: "Yash Tripathi",
    date: "16 October 2025",
    description:
      "We sat down with London’s fast-growing brand and product design details, lorem ipsum.",
    tags: ["Design", "Research"],
    image: "/blogImg2.jpg",
  },
  {
    id: 3,
    title: "Conversation with Raymond Reality and Oberai Reality",
    author: "Yash Tripathi",
    date: "16 October 2025",
    description:
      "We sat down with London’s fast-growing brand and product design details, lorem ipsum.",
    tags: ["Design", "Research"],
    image: "/blogImg3.jpg",
  }, 
   {
    id: 4,
    title: "Conversation with Raymond Reality and Oberai Reality",
    author: "Yash Tripathi",
    date: "16 October 2025",
    description:
      "We sat down with London’s fast-growing brand and product design details, lorem ipsum.",
    tags: ["Design", "Research"],
    image: "/blogImg4.jpg",
  },
];

export default function BlogSection() {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Blogs</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-200">
          <Image
            src={blogs[0].image}
            alt={blogs[0].title}
            width={800}
            height={500}
            className="w-full h-72 object-cover "
          />
          <div className="p-4">
            <p className="text-sm text-black">
              {blogs[0].author} • {blogs[0].date}
            </p>
            <h3 className="text-lg font-semibold mt-2">
              {blogs[0].title}
            </h3>
            <p className="text-gray-600 text-sm mt-1">{blogs[0].description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {blogs[0].tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 border border-black rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        
        <div className="flex flex-col gap-6">
          {blogs.slice(1).map((blog) => (
            <div
              key={blog.id}
              className="flex gap-4 items-start border-b pb-4 border-gray-200"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={150}
                height={100}
                className="rounded-lg object-cover w-40 h-32"
              />
              <div className="flex-1">
                <p className="text-sm text-black">
                  {blog.author} • {blog.date}
                </p>
                <h4 className="font-semibold text-base mt-1">
                  {blog.title}
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                  {blog.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 border border-black rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
