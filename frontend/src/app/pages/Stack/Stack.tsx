"use client"
import Image from "next/image"
import { useState, useEffect } from 'react';

const LoadingAnimation = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-zinc-900">
      <div className="animate-spin rounded-full h-60 w-60 border-t-4 border-b-4 border-white text black"></div>
      <div className="absolute animate-shake animate-once animate-duration-[1500ms] animate-ease-linear text-4xl">Stack</div>
    </div>
  );


export default function Stack(){
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const delayTimer = setTimeout(() => {
        setLoading(false);
        }, 500);

        return () => clearTimeout(delayTimer);
    }, []);

    return(
        <div>
            {isLoading && <LoadingAnimation />} {/* Show loading animation while delaying */}

            <div className={`delayed-content ${isLoading ? 'hidden' : 'block'} flex h-screen bg-zinc-600`}>
                <div className="z-0 h-full w-1/3 relative">
                    <Image
                    src="/images/Profile/Stack.jpg"
                    alt="Profile Image"
                    layout="fill"
                    objectFit="cover"
                    className="animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out"
                    />
                </div>
                <div className="relative h-full w-2/3 flex items-center justify-center">
                    {/* Background bars */}
                    <div className="absolute inset-0 flex w-full z-0">
                        <div className="h-full w-1/5 bg-zinc-900 animate-fade-left animate-once animate-duration-[1000ms] animate-delay-[300ms]"></div>
                        <div className="h-full w-1/5 bg-zinc-900 animate-fade-left animate-once animate-duration-[1000ms] animate-delay-[600ms]"></div>
                        <div className="h-full w-1/5 bg-zinc-900 animate-fade-left animate-once animate-duration-[1000ms] animate-delay-[900ms]"></div>
                        <div className="h-full w-1/5 bg-zinc-900 animate-fade-left animate-once animate-duration-[1000ms] animate-delay-[1200ms]"></div>
                        <div className="h-full w-1/5 bg-zinc-900 animate-fade-left animate-once animate-duration-[1000ms] animate-delay-[1500ms]"></div>
                    </div>
                    <p className="text-xl w-4/5 z-10">
                        I am Chanawut Wuttinun, a Computer Science student with a passion for improving technical programming skills. I am confident in my Frontend skills. In addition to that I internship to improve my backend skills to prepare to be Full-stack in the future. In Front-end stacks. I am familiar with Javascript by Next.js, React.js, Nuxt.js, and Vue.js. Including the use the Tailwind CSS and experience in designing with Figma. In Back-end stacks. I mostly got from Intern to use dotnet C# and there is also Python, Java, Meillisearch, Kafka, RabbitMQ, Grpc, RestAPI, API blueprint, and Laravel. and experience with Docker Compose to use MySql, and Postgresql Database. I am driven by a commitment to improve programming skills for positive change.
                    </p>
                </div>
            </div>
        </div>
    )
}