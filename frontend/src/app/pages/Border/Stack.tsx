import Image from 'next/image';

export default function Stack() {
    return (
        <div className="h-full bg-zinc-800">
            <div className='z-0 w-full '>
                <div className='flex justify-between'>
                    <div></div>
                    <div className=" mt-8 text-4xl items-center">
                        Stack
                    </div>
                    <div></div>
                </div>
                <div>
                    <div className="text-center lg:mt-8 md:mt-8 mt-80 z-10">
                        Kasetsart University,
                        Bangkhen Campus Bangkok, Thailand
                        B.S. Computer Science
                        June 2021 - Present
                    </div>
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
