"use client"
import React, {ChangeEvent, useState} from 'react';
import {useRouter, useSearchParams} from "next/navigation";
import Link from 'next/link';
import {signIn} from "next-auth/react";

interface LoginFormData {
    username: string;
    password: string;
}

const Login = () => {
    const [errors, setErrors] = useState(null);
    const router = useRouter();
    const [formData, setFormData] = useState({} as LoginFormData);
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/auth/profile";

    const renderError = (errors: any) => {
        const errorList = Object.keys(errors).map((key, index) => {
            return (
                <span className='text-red-700' key={index}>{errors[key]}</span>
            )
        })
        return errorList
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }
    const handleSubmit = async (e: React.SyntheticEvent): Promise<void> => {
        e.preventDefault();
        try {
            const response = await signIn('credentials', {
                username: formData.username,
                password: formData.password,
                callbackUrl: '/auth/profile/',
                redirect: false,
            });
            if (response?.error) {
                const errorList = JSON.parse(response.error)
                setErrors(errorList.errors);
                return;
            }
            router.push(callbackUrl);
            // console.log('response: ', response);
        } catch (e) {
            console.log('response.error: ', e);
        }
    }
    return (
        <div className="form-card">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h1 className="text-center text-3xl font-bold">Sing In</h1>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit} action="#" method="POST">
                    {errors && renderError(errors)}
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
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
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-blue-400 hover:text-blue-500">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                onChange={handleChange}
                                autoComplete="current-password"
                                required
                                className="form-field"
                            />
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="btn-primary w-full">
                            Sign in
                        </button>
                    </div>
                </form>

                <p className="mt-3 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <Link href={'/auth/registration'}
                          className="font-semibold leading-6 text-blue-400 hover:text-blue-500">
                        Create New Account
                    </Link>
                </p>
                <div className="divider">OR</div>
                <button type="button" className="btn-google"
                onClick={() => signIn('google', {
                    callbackUrl: '/auth/profile',
                    redirectUri: 'http://localhost:3000/auth/profile',
                })}
                >
                    <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                    Sign in with Google
                </button>
                <button type="button" className="btn-github mt-2"
                onClick={() => signIn('github', {callbackUrl: '/auth/profile'})}
                >
                    <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                    Sign in with Github
                </button>
            </div>
        </div>
    )
}

export default Login;