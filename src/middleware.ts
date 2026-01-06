import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "@/i18n/routing";

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "always", // URL her zaman /tr veya /en ile başlar
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
