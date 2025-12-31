import adaniLogo from "@/assets/partners/adani.png";
import waareeLogo from "@/assets/partners/waaree.png";
import emmveeLogo from "@/assets/partners/emmvee.png";
import solarYaanLogo from "@/assets/partners/solaryaan.png";
import havellsLogo from "@/assets/partners/havells.png";
import sungrowLogo from "@/assets/partners/sungrow.png";
import ksolarLogo from "@/assets/partners/ksolar.png";
import polycabLogo from "@/assets/partners/polycab.png";
import schneiderLogo from "@/assets/partners/schneider.png";
import legrandLogo from "@/assets/partners/legrand.png";
import keiLogo from "@/assets/partners/kei.png";
import finolexLogo from "@/assets/partners/finolex.png";
import abbLogo from "@/assets/partners/abb.png";
import lntLogo from "@/assets/partners/lnt.png";
import siemensLogo from "@/assets/partners/siemens.png";
import aeremLogo from "@/assets/partners/aerem.png";
import bajajLogo from "@/assets/partners/bajaj.png";

// Fallback image (using one of the existing logos or your main logo if preferred)
// Ideally point this to your main brand logo if you have one imported, 
// otherwise we use one of the partner logos to prevent crash.
const placeholderLogo = adaniLogo; 

export const partnerCategories = [
  {
    title: "Solar Partner",
    partners: [
      { name: "Adani Solar", logo: adaniLogo },
      { name: "Waaree", logo: waareeLogo },
      { name: "Emmvee", logo: emmveeLogo },
    ],
  },
  {
    title: "Inverter Partner",
    partners: [
      { name: "Solar YAAN", logo: solarYaanLogo },
      { name: "Havells", logo: havellsLogo },
      { name: "Sungrow", logo: sungrowLogo },
      { name: "KSolar", logo: ksolarLogo },
    ],
  },
  {
    title: "BOS Partner",
    partners: [
      { name: "Polycab", logo: polycabLogo },
      { name: "Schneider", logo: schneiderLogo },
      { name: "Legrand", logo: legrandLogo },
      { name: "KEI", logo: keiLogo },
      { name: "Finolex", logo: finolexLogo },
      { name: "ABB", logo: abbLogo },
      { name: "L&T", logo: lntLogo },
      { name: "Siemens", logo: siemensLogo },
    ],
  },
  {
    title: "Tech & Finance",
    partners: [
      { name: "AEREM", logo: aeremLogo },
      { name: "Bajaj Finserv", logo: bajajLogo }
    ],
  },
];

// Flatten the list for the Marquee
export const allPartners = partnerCategories.flatMap((category) =>
  category.partners.map((partner) => ({
    ...partner,
    category: category.title,
    logo: partner.logo || placeholderLogo, 
  }))
);