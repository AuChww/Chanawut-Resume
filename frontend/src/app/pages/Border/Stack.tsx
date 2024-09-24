import Image from 'next/image';

export default function Stack() {
    return (
        <div className="h-full bg-zinc-800 rounded-xl">
            <div className='z-0 w-full '>
                <div className='flex justify-between'>
                    <div></div>
                    <div className="mb-4 mt-8 text-4xl items-center">
                        Stack
                    </div>
                    <div></div>
                </div>
                <Image
                    src="/images/Profile/Stack.jpg" // Path relative to the public folder
                    alt="Byenior Image"
                    width={350}
                    height={300}
                    className='mx-auto my-2 rounded-xl'
                />
            </div>
        </div>
    );
}
