import Image from 'next/image';

export default function University() {
    return (
        <div className="h-full bg-zinc-800 rounded-xl">
            <div className='z-0 w-full '>
                <div className='flex justify-between'>
                    <div></div>
                    <div className="mb-4 mt-8 text-4xl items-center">
                        University
                    </div>
                    <div></div>
                </div>
                <Image
                    src="/images/University/Byenior2.jpg" // Path relative to the public folder
                    alt="Byenior Image"
                    width={300}
                    height={300}
                    className='mx-auto my-2'
                />
                <Image
                    src="/images/University/Freshy1.jpg" // Path relative to the public folder
                    alt="Byenior Image"
                    width={300}
                    height={300}
                    className='mx-auto my-2'
                />
            </div>
        </div>
    );
}
