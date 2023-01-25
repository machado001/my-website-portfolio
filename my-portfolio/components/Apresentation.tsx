import Link from "next/link"

export const Apresentation = ({ h1Content, pContent }: {
    h1Content: string;
    pContent: string;
}) => {
    return (
        <>
            <div className=' flex justify-center items-center flex-col pt-10'>
                <h1 className={`text-3xl`}>
                    {h1Content}
                </h1>
                <p> {pContent}</p>

            </div>
        </>
    )
}
