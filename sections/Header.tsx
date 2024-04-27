
interface Props {
  searchPlaceholder?: string;
  searchValue?: string;
}

export default function Header({
  searchPlaceholder = "Search",
  searchValue = "",
}: Props) {
  return (
    <div class="container mx-auto lg:px-0 px-4">
      <div class="flex gap-8 items-center justify-between py-4">
        <div class="relative z-40 cursor-pointer lg:hidden pt-6">
          <input class="hidden peer" type="checkbox" id="menu-mobile" />
          <div class="relative absolute top-[-0.7rem] z-50 block h-0.5 w-7 bg-black transition-all duration-200 ease-out peer-checked:translate-y-[0.7rem] peer-checked:rotate-[45deg]"></div>
          <div class="relative absolute top-[-0.35rem] z-50 block h-0.5 w-7 bg-black transition-all duration-200 ease-out peer-checked:opacity-0"></div>
          <div class="relative absolute top-[0] z-50 block h-0.5 w-7 bg-black transition-all duration-200 ease-out peer-checked:-translate-y-[0.2rem] peer-checked:-rotate-[45deg]"></div>
          <div class="backdrop-blur-sm bg-black/50 fixed h-full hidden inset-0 peer-checked:block w-full z-40">&nbsp;</div>
          <div class="fixed duration-500 overflow-y-auto overscroll-y-none peer-checked:translate-x-0 left-0 top-0 transition translate-x-full w-full z-40 h-full bg-base-100 flex flex-col float-left gap-8 min-h-full pt-12 px-6 shadow-2xl">
            <ul class="flex flex-col gap-8">
              <li><a href="/" aria-label="a revista">a revista</a></li>
              <li><a href="/" aria-label="notícias">notícias</a></li>
              <li><a href="/" aria-label="corpo editorial">corpo editorial</a></li>
              <li><a href="/" aria-label="instruções aos autores">instruções aos autores</a></li>
              <li><a href="/" aria-label="submissões">submissões</a></li>
              <li><a href="/contato" aria-label="contato">contato</a></li>
            </ul>
            <ul class="flex items-center gap-3">
              <a id="change-me-1" href="/" class="font-normal btn btn-primary">en</a>
              <a id="change-me-1" href="/" class="font-normal btn btn-outline">pt</a>
            </ul>
          </div>
        </div>

        <ul class="flex items-center justify-between text-white w-full lg:flex">
          <ul class="flex" >
            <li><a href="/" aria-label="a revista" class="link no-underline hover:underline p-4">a revista</a></li>
            <li><a href="/" aria-label="notícias" class="link no-underline hover:underline p-4">notícias</a></li>
            <li><a href="/" aria-label="corpo editorial" class="link no-underline hover:underline p-4">corpo editorial</a></li>
            <li><a href="/" aria-label="instruções aos autores" class="link no-underline hover:underline p-4">instruções aos autores</a></li>
            <li><a href="/" aria-label="submissões" class="link no-underline hover:underline p-4">submissões</a></li>
            <li><a href="/contato" aria-label="contato" class="link no-underline hover:underline p-4">contato</a></li>
          </ul>
          <ul class="relative">
            <input type="text" placeholder="" value="" class="input placeholder-black w-full p-4 pl-12 pr-4 text-white pl-left-icon" />
            <div class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l5 5M10 14a4 4 0 100-8 4 4 0 000 8z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l5 5M10 14a4 4 0 100-8 4 4 0 000 8z"></path>
              </svg>
            </div>
          </ul>
          <ul class="flex gap-3">
            <a href="/" class="font-normal btn btn-primary">en</a>
            <a href="/" class="font-normal btn btn-outline">pt</a>
          </ul>
        </ul>
      </div>
    </div>
  );
}
