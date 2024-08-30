"use client";

import { signUp } from "@/actions";
import { useActionState } from "react";

export default function SignUpForm() {
    return (
        <form action={signUp}>
            <input name="name" />
            <input name="email" />
            <input name="password" />
            <button>Sign Up</button>
        </form>
    )
}