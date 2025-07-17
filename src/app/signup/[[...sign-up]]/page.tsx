"use client"
import * as Clerk from "@clerk/elements/common"
import * as SignUp from "@clerk/elements/sign-up"
import Link from "next/link"




export default function Signupp() {
    return (
        <div className='h-screen flex items-center justify-between p-8'>
            <div className="hidden lg:flex  items-center justify-center h-full w-full">
                <svg className="" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256"
                    style={{ fill: "#FFFFFF" }}>
                    <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(5.12,5.12)">
                        <path d="M6.91992,6l14.2168,20.72656l-14.9082,17.27344h3.17773l13.13867,-15.22266l10.44141,15.22266h10.01367l-14.87695,-21.6875l14.08008,-16.3125h-3.17578l-12.31055,14.26172l-9.7832,-14.26172z"></path></g></g>
                </svg>



            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-4">

                <h1 className="text-2xl xsm:text-4xl md:text-6xl font-bold">Happening now</h1>
                <h1 className="text-2xl">Join today</h1>
                <SignUp.Root >
                    <SignUp.Step name="start" className="flex flex-col gap-4">
                        <Clerk.Connection name="google" className="justify-center  gap-2 bg-white rounded-full p-1.5 text-black w-72  flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="30" viewBox="0 0 48 48">
                                <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            </svg>
                            Sign up with google
                        </Clerk.Connection>

                        <Clerk.Connection name="apple" className="mt-3 gap-2  justify-center bg-white rounded-full p-1.5 text-black w-72  flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="30" viewBox="0 0 30 30">
                                <path d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z"></path>
                            </svg>
                            Sign up with apple
                        </Clerk.Connection>

                        <div className="flex flex-col gap-4">
                            Sign up with credentials

                            <Clerk.Field name="emailAddress" className="flex flex-col gap-2">
                                <Clerk.Input
                                    className="py-2 px-6 rounded-full text-black w-72 placeholder:text-sm bg-white/75"
                                    placeholder="email" />
                                <Clerk.FieldError className="text-red-300 text-sm" />
                            </Clerk.Field>

                            <Clerk.Field name="password" className="flex flex-col gap-2">
                                <Clerk.Input
                                    className="py-2 px-6 rounded-full text-black w-72 bg-white/75 placeholder:text-sm"
                                    placeholder="password" />
                                <Clerk.FieldError className="text-red-300 text-sm" />
                            </Clerk.Field>
<SignUp.Captcha/>
<SignUp.Action submit className="w-72 text-center  bg-icon-blue p-2 rounded-full text-white font-bold">
Signup
</SignUp.Action>
                        </div>

                        {/* Login with creds  */}

                    </SignUp.Step>

                    {/* or sign up  */}
                    <div className="w-72 justify-center flex items-center gap-4">
                        <div className="h-px flex-1/2 bg-border-gray flex-grow"></div>
                        <span className="text-text-gray-light">or</span>
                        <div className="h-px flex-1/2 bg-border-gray flex-grow"></div>
                    </div>
                    <Link href="/sign-in"
                        className="bg-icon-blue rounded-full text-center p-2 font-bold w-72 text-white">
                        Already have an account?
                    </Link>
                    <p className="text-xs w-72">By signing up, you agree to the <span className="text-icon-blue">Terms of Service</span> and <span className="text-icon-blue">Privacy Policy</span>, including Cookie Use.</p>
                </SignUp.Root>
            </div>
        </div>
    )
}
