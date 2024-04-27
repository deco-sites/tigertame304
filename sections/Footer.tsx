import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  revista?: {
    Logo?: ImageWidget;
    Texto?: string;
  };
  demaisLogos?: {
    UFRJ?: ImageWidget;
    CNPq?: ImageWidget;
    CAPES?: ImageWidget;
    FAPERJ?: ImageWidget;
  };
  indexada?: string;
  CC?: {
    Logo?: ImageWidget;
    Texto?: string;
  };
}

export default function Footer({
  revista = {
    Logo: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    Texto: "Universidade Federal do Rio de Janeiro | Instituto de Filosofia e Ciências Sociais PPGSA Programa de Pós-Graduação em Sociologia e Antropologia",
  },
  demaisLogos = {
    UFRJ: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    CNPq: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    CAPES: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    FAPERJ: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
  },
  //copyright = "© 2024 deco.cx. All rights reserved.",
  indexada = "CLASE (Diretório/Directory) DOAJ (Diretório/Directory) EBSCOHOST Latinde (Catálogo/Catalog) ProQuest Portal de Periódicos CAPES (Catálogo/Catalog) SciELO Scopus SEER/Ibict Sumários.org (Diretório/Directory)",
  CC = {
    Logo: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",,
    Texto: "Todo o conteúdo deste periódico, exceto onde está identificado, está licenciado sob uma Creative Commons License",
  },

}: Props) {
  return (
    <div class="lg:container lg:mx-auto md:max-w-6xl mx-4 pt-16 text-sm">
      <div class="flex flex-col gap-20">
        <div class="flex flex-col gap-6 justify-between lg:flex-row">
          <div class="flex flex-col items-center justify-center w-1/5">
            <Image
              src={revista.Logo || ""}
              width={100}
              height={28}
              alt="Logo Revista PPGSA"
            />
            <p>{revista.Texto}</p>
          </div>
          <div class="flex flex-col items-center justify-center w-1/5">
            <div class="flex justify-center items-center space-x-6">
              <Image
                src={demaisLogos.UFRJ || ""}
                width={68}
                alt="Logo UFRJ"
              />
              <Image
                src={demaisLogos.CNPq || ""}
                width={68}
                alt="Logo CNPq"
              />
              <Image
                src={demaisLogos.CNPq || ""}
                width={68}
                alt="Logo CNPq"
              />
              <Image
                src={demaisLogos.CNPq || ""}
                width={68}
                alt="Logo CNPq"
              />
            </div>
          </div>
          <div class="flex flex-col items-center justify-center w-1/5">
            <div class="flex justify-between items-center space-x-6">
              <div class="text-pink-500 text-right">
                <p>A revista está indexada em</p>
              </div>
              <div>
                <p>{indexada}</p>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center justify-center w-1/5">
            <Image
              src={CC.Logo || ""}
              width={68}
              alt="Logo CC"
            />          
          </div>
          <div class="flex flex-col items-center justify-center w-1/5 text-right">
            <p>{CC.Texto}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
