"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type AdminRouteProps = {
    navItem: {
        url: string;
        text: string;
        blank: boolean;
    }
}

export default function AdminRoute({navItem}: AdminRouteProps) {
    const currentPath = usePathname();
    const isActive = currentPath.startsWith(navItem.url);
  return (
    <Link
        className={`${isActive ? 'bg-amber-400' : ''} font-bold text-lg border-t border-gray-200 p-3 last:border-b`}
        href={navItem.url}
        target={navItem.blank ? '_blank' : ''}
    >
        {navItem.text}
    </Link>
  )
}
