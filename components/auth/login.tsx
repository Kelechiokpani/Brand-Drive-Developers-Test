'use client'
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {useAuthStore} from "@/stores/authStore";
import { useRouter } from 'next/navigation';
import {useState} from "react";

const LoginForm = () => {
    const [keepLoggedIn, setKeepLoggedIn] = useState(false);
    const login = useAuthStore((state) => state.login);
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email address").required("Email is required"),
            password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
        }),
        onSubmit: (values:any) => {
            console.log("Login Data", values);
            const user = { email: values.email, fullName: 'BD-Test' };
            login(user,keepLoggedIn);
            router.push('/dashboard');
            // Handle API login here
        },
    });

    return (
        <Card className="w-[500px] mx-auto mt-20 shadow-lg bg-white">
            <CardHeader>
                <CardTitle>Login</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-8">
                    <div>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="py-6"
                        />
                        {formik.touched.email && typeof formik.errors.email === "string" && (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                        )}
                    </div>
                    <div>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="py-6"
                        />
                        {formik.touched.password && typeof formik.errors.password === "string" && (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
                        )}
                    </div>


                    <div className="flex items-center space-x-2">
                        <input
                            id="keepLoggedIn"
                            type="checkbox"
                            checked={keepLoggedIn}
                            onChange={(e) => setKeepLoggedIn(e.target.checked)}
                        />
                        <label htmlFor="keepLoggedIn">Keep me logged in</label>
                    </div>

                    <div className="flex justify-between">
                        <a href="#" className="text-sm text-gray-500 hover:underline">Forgot Password?</a>
                    </div>
                    <Button type="submit"
                            className="w-full py-6 text-white bg-[#1a4293] cursor-pointer"
                            onClick={() => formik.handleSubmit()}
                            disabled={formik.isSubmitting}>
                        {formik.isSubmitting ? "Logging in..." : "Login"}
                    </Button>

                    <p className="text-center text-sm">
                        Don't have an account? <a href="/" className="text-blue-500 hover:underline">Sign Up</a>
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};

export default LoginForm;
