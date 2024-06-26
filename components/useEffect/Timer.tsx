"use client"
import { useState , useEffect } from "react";
import axios from "axios";

export default function Timer() {
    const [seconds , setSeconds] =  useState<number>(0);
    const [user, setUser] = useState<string | null>(null); // Changed to string or null for user ID

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevState => prevState + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const signup = async () => {
        try {
            const response = await axios.post("http://localhost:9000/api/signup", {
                name: "adsasdasd",
                email: "ahasdasdifnivfnhd@gmail.com",
                password: "123456"
            });
            console.log("response===>", response.data.user);
            setUser(response.data.user._id);
        } catch (error) {
            console.error("error===>", error);
        }
    }

    useEffect(() => {
        if (user) {
            console.log("Go to home");
        } else {
            console.log("not sign up");
        }
    }, [user]);

    return (
        <div>
            <button onClick={signup}>Signup</button>
            <p>{seconds} Seconds</p>
        </div>
    );
}
