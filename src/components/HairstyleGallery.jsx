
import { FiArrowUpRight } from "react-icons/fi";

const hairstyles = [
  {
    name: "Knotless Braids",
    description: "Lightweight and stylish",
    image:
      "https://plus.unsplash.com/premium_photo-1694618623858-bd592dfc1314?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    name: "Cornrows",
    description: "Clean and timeless",
    image:
      "https://plus.unsplash.com/premium_photo-1718275465244-9f3bfc7a0d0f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    name: "Boho Braids",
    description: "Soft and fashionable",
    image:
      "https://plus.unsplash.com/premium_photo-1691801710552-1e22dcf13585?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    name: "Elegant Styling",
    description: "Made for special occasions",
    image:
      "https://plus.unsplash.com/premium_photo-1694618624087-3e900df2bfb4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
];

export default function HairstyleGallery() {
  return (
    <section id="styles" className="bg-white px-5 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[3px] text-gold">
              OUR SIGNATURE STYLES
            </p>
            <h2 className="font-display text-4xl text-charcoal sm:text-5xl">
              Trending Looks
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-stone-500">
              Find your next look from our collection of beautiful
              hairstyles.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {hairstyles.map((style) => (
            <article key={style.name} className="group min-w-0">
              <div className="overflow-hidden rounded-xl bg-beige">
                <img
                  src={style.image}
                  alt={`${style.name} inspiration`}
                  loading="lazy"
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-80"
                />
              </div>

              <div className="flex items-start justify-between gap-2 pt-4">
                <div>
                  <h3 className="font-display text-lg text-charcoal sm:text-xl">
                    {style.name}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-stone-500">
                    {style.description}
                  </p>
                </div>
                <FiArrowUpRight className="mt-1 shrink-0 text-gold" />
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-stone-400">
          These are temporary inspiration images. Replace them with
          photos of the stylist's actual work before launch.
        </p>
      </div>
    </section>
  );
}
