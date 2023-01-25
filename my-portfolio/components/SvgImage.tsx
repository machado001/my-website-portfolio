import Image from "next/image"

interface SvgType {
    src: string;
    alt: string;
    height: number;
    width: number;
}

const SvgImage = ({ src, alt, height, width }: SvgType) => {
    return (
        <>
            <Image src={src} height={height} width={width} alt={alt} />
        </>
    )
}

export default SvgImage