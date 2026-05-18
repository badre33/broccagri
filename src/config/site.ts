/**
 * Configuration centrale du site vitrine.
 * Modifier ces valeurs ici plutôt que dans chaque composant.
 */

export const SITE_URL =
  (typeof window !== "undefined" && window.location.origin) ||
  "https://broccagri.ma";

/**
 * URL de la boutique. En production elle est servie sur le même domaine
 * sous /boutique via reverse proxy Netlify. En dev local on peut pointer
 * vers le port du shop (8081) en surchargeant via VITE_SHOP_URL.
 */
export const SHOP_URL =
  import.meta.env.VITE_SHOP_URL || "/boutique";

export const SITE_NAME = "Broccagri";

export const CONTACT = {
  phone: "+212 661 79 24 73",
  phoneRaw: "+212661792473",
  email: "contact@broccagri.ma",
  whatsapp: "212661792473",
  facebook: "https://www.facebook.com/profile.php?id=61572799044315",
  instagram: "https://www.instagram.com/brocc_agri/",
};

export const SUPPORTED_LANGUAGES = ["fr", "ar", "es", "en"] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export const DEFAULT_LANGUAGE: SupportedLanguage = "fr";
