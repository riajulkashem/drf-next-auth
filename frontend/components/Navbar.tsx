"use client"
import Link from 'next/link'
import React from 'react'
import {signOut, useSession} from "next-auth/react";
import Image from "next/image";

function Navbar() {

    const {data: session, status} = useSession();

    const unauthenticatedMenu = (
        <>
            <Link href={"/auth/login"} className="btn-primary">Login</Link>
            <Link href={"/auth/registration"} className="btn-primary">Register</Link>
        </>
    )
    const authenticatedMenu = (
        <div className="dropdown dropdown-end flex items-center">
            <div className='text-2xl me-3 text-capitalize'>{session?.user?.name
            }</div>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img
                        src={session?.user?.image || '/images/default-avatar.png'}
                        alt={session?.user?.name || 'User'}
                    />
                </div>
            </label>
            <ul tabIndex={0}
                className="mt-44 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                    <Link className="justify-between" href={'/auth/profile'}>
                        Profile
                    </Link>
                </li>
                <li><a>Settings</a></li>
                <li><a onClick={() => signOut()}>Logout</a></li>
            </ul>
        </div>
    )
    return (
        <div className="bg-base-100 fixed w-full">
            <div className="container mx-auto navbar">
                <div className="flex-1">
                    <Link href={'/'} className="text-xl font-bold">DRF Next Auth</Link>
                </div>
                <div className="flex-none gap-2">
                    {session ? authenticatedMenu : unauthenticatedMenu}
                </div>
            </div>
        </div>
    )
}

export default Navbar