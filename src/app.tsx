import "@fontsource-variable/fraunces";
import "@fontsource/barlow/500.css";
import "@fontsource/barlow/800.css";
import { cn } from "cn";

import headerDesktop from "./assets/desktop/image-header.jpg";
import transform from "./assets/desktop/image-transform.jpg";
import arrowDown from "./assets/icon-arrow-down.svg";
import standOut from "./assets/desktop/image-stand-out.jpg";
import graphicDesign from "./assets/desktop/image-graphic-design.jpg";
import photography from "./assets/desktop/image-photography.jpg";
import emily from "./assets/image-emily.jpg";
import thomas from "./assets/image-thomas.jpg";
import jennie from "./assets/image-jennie.jpg";
import galleryMilk from "./assets/desktop/image-gallery-milkbottles.jpg";
import galleryOrange from "./assets/desktop/image-gallery-orange.jpg";
import galleryCone from "./assets/desktop/image-gallery-cone.jpg";
import gallerySugarcubes from "./assets/desktop/image-gallery-sugarcubes.jpg";

export function App() {
  const style = {
    "font-barlow": "font-['Barlow']",
    "font-fraunces": "font-['Fraunces_Variable']",
    "bg-yellow-500": "bg-[hsl(51,100%,49%)]",
    "text-grey-950": "text-[hsl(212,27%,19%)]",
    "text-grey-600": "text-[hsl(213,9%,39%)]",
  };
  return (
    <main>
      <section className="relative min-h-screen">
        <header
          className={cn(
            style["font-barlow"],
            "relative z-2 p-6 lg:p-10 text-white flex items-center justify-between",
          )}
        >
          <a className="text-3xl bottom-0" style={{ fontWeight: "900" }}>
            sunnyside
          </a>
          <nav className="hidden lg:block">
            <ul
              className={cn(style["font-barlow"], "flex items-center gap-10")}
              style={{ fontWeight: "500" }}
            >
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>Projects</a>
              </li>
              <li>
                <button
                  className={cn(
                    style["font-fraunces"],
                    "bg-white text-black py-2 px-3 rounded-full text-sm h-12 w-33 hover:bg-white/30 hover:text-white cursor-pointer",
                  )}
                >
                  <p style={{ fontWeight: "900" }}>CONTACT</p>
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <div className="relative z-2 text-center text-white">
          <h1
            className={cn(
              style["font-fraunces"],
              "text-5xl text-center tracking-widest px-6 pt-10",
            )}
            style={{ fontWeight: "900" }}
          >
            WE ARE CREATIVES
          </h1>
          <img
            src={arrowDown}
            className="relative top-30 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <img
          src={headerDesktop}
          className="absolute z-1 w-full h-full object-cover top-0"
        />
      </section>
      <section className="grid lg:rid-cols-2 lg:grid-row-2">
        <article className="lg:col-start-2">
          <img src={transform} className="w-full h-full object-cover" />
        </article>
        <article className="lg:col-start-1 lg:row-start-1 flex items-center justify-center">
          <div className="max-w-110 h-100 lg:h-0 flex flex-col items-center lg:items-start justify-center p-4 space-y-6">
            <h2
              className={cn(
                style["font-fraunces"],
                style["text-grey-950"],
                "text-4xl text-center lg:text-left",
              )}
              style={{ fontWeight: "900" }}
            >
              Transform your brand
            </h2>
            <p
              className={cn(
                style["font-barlow"],
                style["text-grey-600"],
                "text-center lg:text-left",
              )}
            >
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <div className="relative w-fit">
              <a
                href="#"
                className={cn(
                  style["font-fraunces"],
                  style["text-grey-950"],
                  "relative z-2 px-2 peer",
                )}
                style={{ fontWeight: "900" }}
              >
                LEARN MORE
              </a>
              <div
                className={cn(
                  style["bg-yellow-500"],
                  "absolute bottom-0 w-full h-3 z-1 rounded-full bg-[hsl(51,100%,49%)]/30 peer-hover:bg-[hsl(51,100%,49%)]/60",
                )}
              />
            </div>
          </div>
        </article>
        <article>
          <img src={standOut} className="w-full h-full object-cover" />
        </article>
        <article className="flex items-center justify-center">
          <div className="max-w-110 h-100 lg:h-0 flex flex-col items-center lg:items-start justify-center p-4 space-y-6">
            <h2
              className={cn(
                style["font-fraunces"],
                style["text-grey-950"],
                "text-4xl text-center lg:text-left",
              )}
              style={{ fontWeight: "900" }}
            >
              Stand out to the right audience
            </h2>
            <p
              className={cn(
                style["font-barlow"],
                style["text-grey-600"],
                "text-center lg:text-left",
              )}
            >
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we'll build and
              extend your brand in digital places.
            </p>
            <div className="relative w-fit">
              <a
                href="#"
                className={cn(
                  style["font-fraunces"],
                  style["text-grey-950"],
                  "relative z-2 px-2 peer",
                )}
                style={{ fontWeight: "900" }}
              >
                LEARN MORE
              </a>
              <div
                className={cn(
                  "absolute bottom-0 w-full h-3 z-1 rounded-full bg-[hsl(7,99%,70%)]/30 peer-hover:bg-[hsl(7,99%,70%)]/60",
                )}
              />
            </div>
          </div>
        </article>
      </section>
      <section className="grid lg:grid-cols-2">
        <article className="relative w-full h-[80vh]">
          <img
            src={graphicDesign}
            className="w-full h-full absolute top-0 z-1 object-cover"
          />
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 -translate-y-1/2 z-2 w-fit mx-auto space-y-10">
            <h2
              className={cn(
                style["font-fraunces"],
                "text-[hsl(167,40%,24%)] text-3xl text-center",
              )}
              style={{ fontWeight: "900" }}
            >
              Graphic Design
            </h2>
            <p
              className={cn(
                style["font-barlow"],
                "text-[hsl(167,40%,24%)] text-center",
              )}
              style={{ fontWeight: "500" }}
            >
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients
              attention.
            </p>
          </div>
        </article>
        <article className="relative w-full h-[80vh]">
          <img
            src={photography}
            className="w-full h-full absolute top-0 z-1 object-cover"
          />
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-2 w-fit mx-auto space-y-10">
            <h2
              className={cn(
                style["font-fraunces"],
                "text-[hsl(198,62%,26%)] text-3xl text-center",
              )}
              style={{ fontWeight: "900" }}
            >
              Photography
            </h2>
            <p
              className={cn(
                style["font-barlow"],
                "text-[hsl(198,62%,26%)] text-center",
              )}
              style={{ fontWeight: "500" }}
            >
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </article>
      </section>
      <section className="p-20 space-y-20">
        <p
          className={cn(
            style["font-fraunces"],
            "text-center text-[hsl(210,4%,67%)] text-xl tracking-[0.3em]",
          )}
          style={{ fontWeight: "900" }}
        >
          CLIENT TESTIMONIALS
        </p>
        <div className="grid lg:grid-cols-3 gap-10 lg:max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center gap-10 text-[hsl(213,9%,39%)]">
            <img src={emily} className="w-15 h-15 rounded-full" />
            <p
              className={cn(style["font-barlow"])}
              style={{ fontWeight: "500" }}
            >
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <div>
              <p
                className={cn(style["font-fraunces"], style["text-grey-950"])}
                style={{ fontWeight: "900" }}
              >
                Emily R.
              </p>
              <p className={cn(style["font-barlow"], "text-sm opacity-80")}>
                Marketing Director
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-10 text-[hsl(213,9%,39%)]">
            <img src={thomas} className="w-15 h-15 rounded-full" />
            <p
              className={cn(style["font-barlow"])}
              style={{ fontWeight: "500" }}
            >
              Sunnyside's enthusiasm coupled with their keen interest in our
              brand's success made it a satisfying and enjoyable experience.
            </p>
            <div>
              <p
                className={cn(style["font-fraunces"], style["text-grey-950"])}
                style={{ fontWeight: "900" }}
              >
                Thomas S.
              </p>
              <p className={cn(style["font-barlow"], "text-sm opacity-80")}>
                Chief Operating Officer
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-10 text-[hsl(213,9%,39%)]">
            <img src={jennie} className="w-15 h-15 rounded-full" />
            <p
              className={cn(style["font-barlow"])}
              style={{ fontWeight: "500" }}
            >
              Incredible and result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <div>
              <p
                className={cn(style["font-fraunces"], style["text-grey-950"])}
                style={{ fontWeight: "900" }}
              >
                Jennie F.
              </p>
              <p className={cn(style["font-barlow"], "text-sm opacity-80")}>
                Business Owner
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2 lg:grid-cols-4">
        <img src={galleryMilk} />
        <img src={galleryOrange} />
        <img src={galleryCone} />
        <img src={gallerySugarcubes} />
      </section>
      <footer className="bg-[hsl(167,44%,70%)] text-[hsl(167,34%,41%)] p-4 flex flex-col items-center gap-20 py-20">
        <div className="flex flex-col items-center gap-8">
          <p
            className={cn(
              style["font-barlow"],
              "text-3xl text-[hsl(168,45%,31%)]",
            )}
            style={{ fontWeight: "900" }}
          >
            sunnyside
          </p>
          <div
            className={cn(style["font-barlow"], "space-x-10")}
            style={{ fontWeight: "500" }}
          >
            <a href="#" className="hover:text-white">
              About
            </a>
            <a href="#" className="hover:text-white">
              Services
            </a>
            <a href="#" className="hover:text-white">
              Projects
            </a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white">
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"
                fill="currentColor"
                fill-rule="nonzero"
              />
            </svg>
          </a>
          <a href="#" className="hover:text-white">
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.718-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 0C7.284 0 6.944.012 5.877.06 2.246.227.227 2.242.061 5.877.01 6.944 0 7.284 0 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122C19.777 2.249 17.76.228 14.124.06 13.057.01 12.716 0 10 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"
                fill="currentColor"
                fill-rule="nonzero"
              />
            </svg>
          </a>
          <a href="#" className="hover:text-white">
            <svg width="20" height="17" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 2.172a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.805-2.27 8.22 8.22 0 01-2.606.996A4.096 4.096 0 0013.847.248c-2.65 0-4.596 2.472-3.998 5.037A11.648 11.648 0 011.392 1a4.109 4.109 0 001.27 5.478 4.086 4.086 0 01-1.858-.513c-.045 1.9 1.318 3.679 3.291 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.833 2.849A8.25 8.25 0 010 14.658a11.616 11.616 0 006.29 1.843c7.618 0 11.923-6.434 11.663-12.205A8.354 8.354 0 0020 2.172z"
                fill="currentColor"
                fill-rule="nonzero"
              />
            </svg>
          </a>
          <a href="#" className="hover:text-white">
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 0C4.477 0 0 4.477 0 10c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.176-4.068-2.845 0-4.516 2.135-4.516 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S15.523 0 10 0z"
                fill="currentColor"
                fill-rule="nonzero"
              />
            </svg>
          </a>
        </div>
      </footer>
    </main>
  );
}
