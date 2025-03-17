'use client'
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {useAuthStore} from "@/stores/authStore";
import {useRouter} from "next/navigation";


const SignupForm = () => {
    const login = useAuthStore((state) => state.login);
    const router = useRouter();


    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().min(3, "Name must be at least 3 characters").required("Name is required"),
            email: Yup.string().email("Invalid email address").required("Email is required"),
            password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
        }),
        onSubmit: (values) => {
            console.log("Signup Data", values);
            const user = { email: values.email, fullName: values.name };
            login(user, true);
            router.push('/dashboard');
        },
    });

    return (
        <Card className="w-[500px] mx-auto mt-30 shadow-lg bg-white">
            <CardHeader>
                <CardTitle>Sign Up</CardTitle>
            </CardHeader>
            <CardContent>
                <div  className="space-y-8">
                    <div>
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Full Name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="py-6"
                        />
                        {formik.touched.name && formik.errors.name && (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
                        )}
                    </div>
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
                        {formik.touched.email && formik.errors.email && (
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
                        {formik.touched.password && formik.errors.password && (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
                        )}
                    </div>
                    <Button type="button"
                            onClick={() => formik.handleSubmit()}
                            className="w-full py-6 text-white bg-[#1a4293] cursor-pointer" disabled={formik.isSubmitting}>
                        {formik.isSubmitting ? "Signing up..." : "Sign Up"}
                    </Button>
                    <p className="text-center text-sm">
                        Already have an account? <a href="/login" className="text-md text-blue-500 hover:underline">Log In</a>
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};

export default SignupForm;
