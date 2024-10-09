import Image from "next/image"
import Link from "next/link"
import { Category } from "@prisma/client"

type CategoryProps = { 
    category: Category
}

export default function CategoryIcon({category}: CategoryProps) {
  return (
    <div className={` flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:b`}>
        <div className="w-16 h-16 relative">
            <Image 
            fill
            src={`/icon_${category.slug}.svg`}
            alt={category.name}
        />
        </div>
        <Link className="text-xl1 font-bold" href={`/order/${category.slug}`}>
            {category.name}
        </Link>
    </div>
  )
}
