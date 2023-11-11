"use client"
import {useRouter} from "next/navigation";
import {signIn, useSession} from "next-auth/react";

export default function ProfilePage() {
    const router = useRouter()
    const {data: session, status} = useSession()

    if (status === "loading") {
        return <div className='text-center mt-96'><span className='loading loading-xl loading-infinity'></span></div>
    }
    if (!session) {
        router.push("/auth/login");
        return;
    }
    console.log(session)
    return (
        <>
            <h1 className='text-6xl m-16'>Profile Page</h1>
        </>
    )
}