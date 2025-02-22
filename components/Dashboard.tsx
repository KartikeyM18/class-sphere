"use client"
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import { redirect } from "next/navigation";
import Image from "next/image";

const Dashboard = () => {
    const [greeting, setGreeting] = useState("Welcome to ClassSphere!");

    const handleGreet = () => {
        setGreeting("Let's build a smarter classroom together!");
    };

    return (
        <div className=" flex flex-col items-center p-4 w-[calc(100vw-18rem)] bg-zinc-900 h-[calc(100vh-68px)]">
            <motion.h1
                className="text-4xl font-bold text-cyan-400 mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {greeting}
            </motion.h1>

            <Image src="/globe.gif" alt="globe" height={300} width={300} />

            <div className="flex w-full justify-center gap-9  mt-6">
                <Card className="bg-white shadow-lg rounded-2xl hover:scale-105 transition delay-100">
                    <CardContent className="p-6 pt-5 mt-4">
                        <h2 className="text-xl font-bold text-blue-600">Attendance Tracker</h2>
                        <p className="text-gray-500 ">Automate attendance with ease.</p>
                        <Button className="mt-4 w-full  hover:scale-110 transition delay-100" onClick={() => redirect('/attendance')}>Go to Attendance</Button>
                    </CardContent>
                </Card>

                <Card className="bg-white shadow-lg rounded-2xl hover:scale-105 transition delay-100">
                    <CardContent className="p-6 pt-5  mt-4">
                        <h2 className="text-xl font-bold text-blue-600">Meeting Schedular</h2>
                        <p className="text-gray-500">Create and manage Meetings.</p>
                        <Button className="mt-4 w-full  hover:scale-110 transition delay-100" onClick={() => redirect('/meeting')}>Create a Meeting</Button>
                    </CardContent>
                </Card>

                <Card className="bg-white shadow-lg rounded-2xl hover:scale-105 transition delay-100">
                    <CardContent className="p-6 pt-5  mt-4">
                        <h2 className="text-xl font-bold text-blue-600">Analytics Dashboard</h2>
                        <p className="text-gray-500">Track student performance.</p>
                        <Button className="mt-4 w-full  hover:scale-110 transition delay-100" onClick={() => redirect('/analytics')}>View Analytics</Button>
                    </CardContent>
                </Card>

            </div>

            <Button
                className="mt-8 bg-cyan-500 hover:bg-blue-700 hover:scale-125 transition delay-100 text-white font-bold py-2 px-4 rounded-2xl"
                onClick={handleGreet}
            >
                Get Inspired
            </Button>
        </div>
    );
};

export default Dashboard;
