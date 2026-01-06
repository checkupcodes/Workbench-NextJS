"use client";

import { usePathname, useRouter } from "next/navigation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const LOCALES = ["tr", "en"] as const;

function getLocaleFromPath(pathname: string) {
  const seg = pathname.split("/")[1];
  return LOCALES.includes(seg as (typeof LOCALES)[number]) ? (seg as (typeof LOCALES)[number]) : "tr";
}

export function LocaleSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = getLocaleFromPath(pathname);

  function switchTo(nextLocale: (typeof LOCALES)[number]) {
    // /tr/tasks -> /en/tasks
    const parts = pathname.split("/");
    parts[1] = nextLocale;
    router.push(parts.join("/"));
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{currentLocale.toUpperCase()}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {LOCALES.map((l) => (
          <DropdownMenuItem key={l} onClick={() => switchTo(l)}>
            {l.toUpperCase()}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
