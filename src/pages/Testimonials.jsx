import { useRef } from "react";

function Testimonials() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= 400;
  };

  const scrollRight = () => {
    scrollRef.current.scrollLeft += 400;
  };

  const testimonials = [
    {
      id: 1,
      name: "JAMES CARTER",
      role: "Founder of Aqua Solutions",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      review:
        "HydroFlow seamlessly blends hydration with blockchain innovation, creating a revolutionary experience that redefines sustainability and purity.",
    },
    {
      id: 2,
      name: "ETHAN MILLER",
      role: "CEO of Innovate Labs",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      review:
        "HydroFlow introduces a groundbreaking concept by combining clean hydration with the cutting-edge possibilities of blockchain technology.",
    },
    {
      id: 3,
      name: "LUCAS BENNETT",
      role: "Managing Director",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      review:
        "The brilliance of HydroFlow lies in its innovative ability to merge purity with technology, redefining how we think about water.",
    },
    {
      id: 4,
      name: "OLIVER HAYES",
      role: "Co-Founder",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      review:
        "HydroFlow is more than hydration. It represents the future of innovation and sustainability combined.",
    },
    {
      id: 5,
      name: "NOAH WILSON",
      role: "Product Manager",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      review:
        "A refreshing approach to hydration that combines technology and wellness in a unique way.",
    },
  ];

  return (
    <section
      className="
        min-h-screen
        bg-[#e8e8e8]
        bg-[linear-gradient(to_right,#d9d9d9_1px,transparent_1px),linear-gradient(to_bottom,#d9d9d9_1px,transparent_1px)]
        bg-[size:40px_40px]
        py-20
      "
    >
      <h1
        className="
          text-center
          text-6xl
          font-bold
          tracking-widest
          mb-16
        "
      >
        Become part Be the  <br />first of our hood
      </h1>

      <div
        ref={scrollRef}
        className="
          w-[90%]
          mx-auto
          flex
          gap-6
          overflow-x-auto
          scroll-smooth
          scrollbar-hide
        "
      >
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="
              min-w-[340px]
              h-[400px]
              bg-white
              border
              border-black
              rounded-3xl
              p-10
              flex
              flex-col
              justify-between
              transition-all
              duration-300
             
            "
          >
            <div>
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full mb-8 object-cover"
              />

              <p className=" ">
                "{item.review}"
              </p>
            </div>

            <div>
              <h2 className="text-3xl tracking-widest font-medium">
                {item.name}
              </h2>

              <p className="text-gray-500 mt-2">
                {item.role}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-10">
        <button
          onClick={scrollLeft}
          className="
            w-12
            h-12
            rounded-xl
            bg-black
            text-white
            hover:scale-110
            transition
          "
        >
          ❮
        </button>

        <button
          onClick={scrollRight}
          className="
            w-12
            h-12
            rounded-xl
            bg-black
            text-white
            hover:scale-110
            transition
          "
        >
          ❯
        </button>
      </div>
    </section>
  );
}

export default Testimonials;