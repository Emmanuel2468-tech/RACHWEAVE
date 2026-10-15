
import React, { useState } from "react";

const hairstyles = [
  {
    id: 1,
    name: "Knotless Braids",
    category: "Braids",
    image:
      "https://images.unsplash.com/photo-1572955304332-bf714bd49add?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 2,
    name: "Cornrows",
    category: "Braids",
    image:
      "https://plus.unsplash.com/premium_photo-1769298397004-4a589b8b679b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 3,
    name: "Elegant Hairstyle",
    category: "Styling",
    image:
      "https://images.unsplash.com/photo-1785927926501-4a5e32a25c58?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 4,
    name: "Natural Hair",
    category: "Natural",
    image:
      "https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 5,
    name: "Glamorous Look",
    category: "Styling",
    image:
      "https://images.unsplash.com/photo-1790863243165-bbacc3f81c7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 6,
    name: "Beauty Braids",
    category: "Braids",
    image:
      "https://images.unsplash.com/photo-1663851071150-b6617bbee927?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 7,
    name: "Ghana Weaving",
    category: "Natural",
    image:
      "https://images.unsplash.com/photo-1624667773099-1b80ae774080?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 8,
    name: "Faux Locs",
    category: "Styling",
    image:
      "https://plus.unsplash.com/premium_photo-1691801710552-1e22dcf13585?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 9,
    name: "Box Braid",
    category: "Braids",
    image:
      "https://plus.unsplash.com/premium_photo-1718275465244-9f3bfc7a0d0f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 10,
    name: "French Curls",
    category: "Natural",
    image:
      "https://media.istockphoto.com/id/1395309768/photo/beautiful-smiling-woman-with-afro-curls.webp?a=1&b=1&s=612x612&w=0&k=20&c=DOJ3DGux_9U2PybvU_50q8_lG14nvEWbTI6r5vIzQpE=",
  },
  {
    id: 11,
    name: "Cruchet Braids",
    category: "Styling",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 12,
    name: "Wool Braids",
    category: "Styling",
    image:
      "https://images.unsplash.com/photo-1590861801941-ffd32cb6eb5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
];

const HairstyleGallery = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleHairstyles = showAll
    ? hairstyles
    : hairstyles.slice(0, 4);

  return (
    <section
      id="hairstyles"
      className="bg-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gold">
            Our Portfolio
          </p>

          <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">
            Find Your Perfect Hairstyle
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Explore our collection of beautiful hairstyles and
            discover a look that matches your personality.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visibleHairstyles.map((style) => (
            <div
              key={style.id}
              className="group overflow-hidden rounded-2xl bg-gray-50 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-80 overflow-hidden">
                <img
                  src={style.image}
                  alt={style.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gold">
                  {style.category}
                </p>

                <h3 className="text-lg font-semibold text-gray-900">
                  {style.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {hairstyles.length > 8 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll((previous) => !previous)}
              className="rounded-full bg-gold px-8 py-3 font-semibold text-white transition duration-300 hover:bg-brown hover:shadow-lg"
            >
              {showAll ? "Show Less" : "View All Hairstyles"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default HairstyleGallery;
