import Image from 'next/image';

export default function Intern() {
    return (
        <div className="h-full bg-zinc-800 rounded-xl">
            <div className='z-0 w-full'>
                <div className='flex justify-between'>
                    <div></div>
                    <div className="mb-4 mt-8 text-4xl items-center">
                        Internship
                    </div>
                    <div></div>
                </div>
                <Image
                    src="/images/Intern/Intern1.jpg" // Path relative to the public folder
                    alt="Byenior Image"
                    width={300}
                    height={300}
                    className='mx-auto my-2'
                />
            </div>
        </div>
    );
}
