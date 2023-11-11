"use client"
import React, {useState, ChangeEvent} from 'react'
import {useRouter} from "next/navigation";
import Link from 'next/link';

interface RegisterFormData {
    username: string;
    email: string;
    password1: string;
    password2: string;

}
function Registration() {
    const router = useRouter()
    const [formData, setFormData] = useState({} as RegisterFormData)

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        console.log(formData)
        // const registrationSuccess = await register(formData.username, formData.email, formData.password1, formData.password2)
        // if (registrationSuccess) router.push('/')
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    return (
        <div className="form-card">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h1 className="text-center text-3xl font-bold mb-5">
                    Sign Up
                </h1>
            </div>

            <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit} action="#" method="POST">
                    <div>
                        <label htmlFor="username" className="form-field-label">
                            Username
                        </label>
                        <div className="">
                            <input
                                id="username"
                                name="username"
                                type="text"
                                autoComplete="username"
                                onChange={handleChange}
                                required
                                className="form-field"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="form-field-label">
                            Email
                        </label>
                        <div className="">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                onChange={handleChange}
                                required
                                className="form-field"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="form-field-label">
                                Password
                            </label>
                        </div>
                        <div className="">
                            <input
                                id="password1"
                                name="password1"
                                type="password"
                                onChange={handleChange}
                                autoComplete="current-password"
                                required
                                className="bg-blue-50 w-full focus:bg-base-100 rounded-md border-0 py-1.5 text-gray-900 shadow-sm outline-none px-3 focus:ring-blue-400 focus:ring-1"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="form-field-label">
                                Confirm Password
                            </label>
                        </div>
                        <div className="">
                            <input
                                id="password2"
                                name="password2"
                                type="password"
                                onChange={handleChange}
                                autoComplete="confirm-password"
                                required
                                className="bg-blue-50 w-full focus:bg-base-100 rounded-md border-0 py-1.5 text-gray-900 shadow-sm outline-none px-3 focus:ring-blue-400 focus:ring-1"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Already a member?{' '}
                    <Link href={"/auth/login"} className="font-semibold leading-6 text-blue-400 hover:text-blue-500">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Registration