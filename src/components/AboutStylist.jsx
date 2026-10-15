
import { FiMessageCircle } from "react-icons/fi";

const WHATSAPP_NUMBER = "234XXXXXXXXXX";

export default function AboutStylist() {
  return (
    <section id="about" className="bg-cream px-5 py-20 md:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1000&q=85"
            alt="Beauty portrait representing the stylist"
            loading="lazy"
            className="h-[380px] w-full object-cover sm:h-[480px]"
          />
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold tracking-[3px] text-gold">
            MEET YOUR STYLIST
          </p>

          <h2 className="font-display text-4xl leading-tight text-charcoal sm:text-5xl">
            Passion. Skill. <span className="italic text-gold">You.</span>
          </h2>

          <p className="mt-6 text-sm leading-8 text-stone-600">
            Every hairstyle deserves care and attention to detail.
            Our goal is to help you feel beautiful and confident
            with a style that suits your personality.
          </p>

          <p className="mt-4 text-sm leading-8 text-stone-600">
            From everyday looks to special occasions, we want every
            visit to leave you feeling your best.
          </p>

          <p className="mt-5 font-display text-xl italic text-brown">
            Neat styles. Personal care. Beautiful results.
          </p>

          <a
            href={`https://wa.me/${+2347083385640}?text=${encodeURIComponent(
              "Hello, I would like to enquire about your hairstyles and prices."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-3 text-sm text-white transition hover:bg-brown"
          >
            <FiMessageCircle size={18} />
            Chat with us
          </a>
        </div>
      </div>
    </section>
  );
}
