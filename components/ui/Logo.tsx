import Image from "next/image";

export default function Logo() {
    return (
        <div className="flex mt-5 justify-center">
            <div className="relative w-40 h-40">
                <Image 
                    fill
                    src="/logo.svg"
                    alt="logo" />
            </div>            
        </div>
    )
}