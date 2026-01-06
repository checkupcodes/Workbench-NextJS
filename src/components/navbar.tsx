import Link from "next/link";
import { LocaleSwitcher } from "./locale-switcher";

export function Navbar({ locale }: { locale: string }) {
  return (
    <header className="border-b">
      <div className="mx-auto max-w-3xl p-4 flex items-center justify-between">
        <Link href={`/${locale}`} className="font-semibold">
          TaskAssign
        </Link>
        <div className="flex items-center gap-2">
          <Link className="text-sm" href={`/${locale}/tasks`}>Tasks</Link>
          <Link className="text-sm" href={`/${locale}/admin`}>Admin</Link>
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
}
