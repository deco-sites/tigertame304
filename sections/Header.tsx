import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";


export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Nav {
  navigation?: {
    links: {
      label?: string;
      url?: string;
    }[];
    buttons: CTA[];
  };
}


export const StyleType: Record<"background" | "color", string> = {
  "background": "bg-[#020617]",
  "color": "text-white",
};

const generateLineStyles = (position: string) => `
  absolute ${position} z-50 block h-0.5 w-7 bg-black transition-all duration-200 ease-out 
`;

const lineStyles = [
  generateLineStyles("top-[-0.7rem]") +
  "peer-checked:translate-y-[0.7rem] peer-checked:rotate-[45deg]",
  generateLineStyles("top-[-0.35rem]") + "peer-checked:opacity-0",
  generateLineStyles("top-[0]") +
  "peer-checked:-translate-y-[0.2rem] peer-checked:-rotate-[45deg]",
];

export default function Haader({
  navigation = {
    links: [
      { label: "a revista", url: "/" },
      { label: "notícias", url: "/" },
      { label: "corpo editorial", url: "/" },
      { label: "instruções aos autores", url: "/" },
      { label: "submissões", url: "/" },
      { label: "contato", url: "/contato" },
    ],
    buttons: [
      { id: "change-me-1", href: "/", text: "en", outline: false },
      { id: "change-me-1", href: "/", text: "pt", outline: true },
    ],
  },
}: Nav) {
  return (
    <nav class="container mx-auto lg:px-0 px-4 bg-[#030712]">
      <div class="flex gap-8 items-center justify-between py-4">
        <label
          class="cursor-pointer lg:hidden pt-6 relative z-40"
          for="menu-mobile"
        >
          <input class="hidden peer" type="checkbox" id="menu-mobile" />
          {lineStyles.map((style, index) => (
            <div key={index} class={`relative ${style}`}></div>
          ))}
          <div class="backdrop-blur-sm bg-black/50 fixed h-full hidden inset-0 peer-checked:block w-full z-40">
            &nbsp;
          </div>
          <div class="duration-500 fixed h-full overflow-y-auto overscroll-y-none peer-checked:translate-x-0 left-0 top-0 transition translate-x-full w-full z-40">
            <div class="bg-base-100 flex flex-col float-left gap-8 min-h-full pt-12 px-6 shadow-2xl w-1/2">
              <ul class="flex flex-col gap-8">
                {navigation?.links.map((link) => (
                  <li>
                    <a href={link.url} aria-label={link.label}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <ul class="flex items-center gap-3">
                {navigation.buttons?.map((item) => (
                  <a
                    key={item?.id}
                    id={item?.id}
                    href={item?.href}
                    target={item?.href.includes("http") ? "_blank" : "_self"}
                    class={`font-normal btn btn-primary ${
                      item.outline && "btn-outline"
                    }`}
                  >
                    {item?.text}
                  </a>
                ))}
              </ul>
            </div>
          </div>
        </label>

        <ul class="hidden text-white items-center justify-between lg:flex w-full">
          <ul class="flex">
            {navigation.links.map((link) => (
              <li>
                <a
                  href={link.url}
                  aria-label={link.label}
                  class="link no-underline hover:underline p-4"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ul class="flex gap-3">
            {navigation.buttons?.map((item) => (
              <a
                key={item?.id}
                id={item?.id}
                href={item?.href}
                target={item?.href.includes("http") ? "_blank" : "_self"}
                class={`font-normal btn btn-primary ${
                  item.outline && "btn-outline"
                }`}
              >
                {item?.text}
              </a>
            ))}
          </ul>
        </ul>
      </div>
    </nav>
  );
}
