
import {
  FiMessageCircle,
  FiInstagram,
  FiArrowDownRight,
} from "react-icons/fi";

const WHATSAPP_NUMBER = "+2347083385640";
const INSTAGRAM_USERNAME = "YOUR_INSTAGRAM_USERNAME";

const message =
  "Hello, I visited your website and would like to enquire about your hairstyles and prices.";

const whatsappLink =
  `https://wa.me/${+2347083385640}?text=${encodeURIComponent(message)}`;

const instagramLink =
  `https://www.instagram.com/${INSTAGRAM_USERNAME}/`;

export default function Hero() {
  return (
    <section id="home" className="overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-12 md:px-8 md:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div>
          <p className="mb-5 text-xs font-semibold tracking-[3px] text-gold">
            PROFESSIONAL HAIR STYLING
          </p>

          <h1 className="font-display text-5xl leading-[1.12] tracking-tight text-charcoal sm:text-6xl lg:text-7xl">
            Beautiful Hair.
            <span className="mt-2 block italic text-gold">
              Beautiful You.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-sm leading-8 text-stone-600 sm:text-base">
            From elegant braids to stunning protective styles,
            let us create a look that expresses your beauty
            and confidence.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-charcoal px-6 py-3 text-sm text-white transition hover:bg-brown"
            >
              <FiMessageCircle size={18} />
              Chat on WhatsApp
            </a>

            <a
              href={instagramLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-brown px-6 py-3 text-sm text-brown transition hover:bg-beige"
            >
              <FiInstagram size={18} />
              View Instagram
            </a>
          </div>

          <a
            href="#styles"
            className="mt-8 inline-flex items-center gap-2 text-sm text-brown"
          >
            Explore our styles <FiArrowDownRight />
          </a>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="overflow-hidden rounded-t-[48%] rounded-b-xl">
            <img
              src="https://plus.unsplash.com/premium_photo-1694618624133-e47f4644a4a4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              alt="Beauty portrait used as a temporary hero image"
              className="h-[420px] w-full object-cover object-center sm:h-[520px]"
            />
          </div>

          <div className="absolute -bottom-4 right-0 flex max-w-[260px] items-center gap-3 bg-white p-4 shadow-xl sm:-right-4">
            <span className="h-10 w-1 shrink-0 bg-gold" />
            <div>
              <p className="font-display text-base text-brown">
                Beauty in every detail
              </p>
              <p className="mt-1 text-[10px] text-stone-500">
                Your style, your confidence
              </p>
            </div>
          </div>

          <span className="absolute right-0 top-0 -z-0 text-4xl text-gold">
            ✳
          </span>
        </div>
      </div>
    </section>
  );
}
