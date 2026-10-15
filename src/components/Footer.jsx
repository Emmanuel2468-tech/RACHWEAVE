
import {
  FiMessageCircle,
  FiInstagram,
  FiMapPin,
  FiArrowUp,
} from "react-icons/fi";

const WHATSAPP_NUMBER = "+2347083385640";
const INSTAGRAM_USERNAME = "YOUR_INSTAGRAM_USERNAME";

export default function Footer() {
  return (
    <>
      <footer id="contact" className="bg-charcoal px-5 py-12 text-cream md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <a href="#home" className="font-display text-3xl italic">
              RACHWEAVE
            </a>
            <p className="mt-3 text-xs tracking-[2px] text-gold">
              BEAUTY · STYLE · CONFIDENCE
            </p>
            <p className="mt-5 max-w-xs text-sm leading-7 text-stone-300">
              Helping you express your beauty, one hairstyle at a time.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl">Get in Touch</h3>
            <a
              href={`https://wa.me/${+2347083385640}`}
              target="_blank"
              rel="noreferrer"
              className="mt-5 flex items-center gap-3 text-sm text-stone-300 hover:text-gold"
            >
              <FiMessageCircle className="text-gold" />
              Chat on WhatsApp
            </a>

            <a
              href={`https://www.instagram.com/${INSTAGRAM_USERNAME}/`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-center gap-3 text-sm text-stone-300 hover:text-gold"
            >
              <FiInstagram className="text-gold" />
              Follow on Instagram
            </a>
          </div>

          <div>
            <h3 className="font-display text-xl">Our Location</h3>
            <p className="mt-5 flex items-start gap-3 text-sm leading-7 text-stone-300">
              <FiMapPin className="mt-1 shrink-0 text-gold" />
              Nigeria
              <span className="text-xs text-stone-400">
                (Replace with the actual salon address or service area.)
              </span>
            </p>
            <a
              href="#home"
              className="mt-5 inline-flex items-center gap-2 text-sm text-gold hover:text-white"
            >
              Back to top <FiArrowUp />
            </a>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/15 pt-6 text-center text-xs text-stone-400">
          © {new Date().getFullYear()} Your Stylist. All rights reserved.
        </div>
      </footer>

      <a
        href={`https://wa.me/${+2347083385640}?text=${encodeURIComponent(
          "Hello, I would like to enquire about your hairstyles and prices."
        )}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-3xl text-white shadow-xl transition hover:scale-110"
      >
        <FiMessageCircle />
      </a>
    </>
  );
}
