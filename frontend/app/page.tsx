"use client"
import {useSession} from "next-auth/react";
import {useEffect} from "react";

export default function Home() {
    const {data: session, status} = useSession()
    useEffect(() => {
        if (session) {
            console.log(session)
        }
    }, []);
    if (status === "loading") {
        return <div className='text-center mt-96'><span className='loading loading-xl loading-infinity'></span></div>
    }

    return (
        <div className='mt-28'>
            <h1 className='text-6xl m-16'>Hello World</h1>
        </div>
    )
}
