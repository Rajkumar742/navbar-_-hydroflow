function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
  ];

  return (
    <section className="min-h-screen bg-[#e8e8e8] overflow-hidden flex items-center">
      <div className="gallery-container w-full mx-10">
        <div className="animate-scroll gap-6">
          {[...images, ...images].map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className="
                w-[280px]
                h-[320px]
                object-cover
                rounded-3xl
                flex-shrink-0
              "
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;