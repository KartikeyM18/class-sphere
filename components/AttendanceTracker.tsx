"use client"
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { redirect } from "next/navigation";

const students = [
    { id: 1, name: "Alice Johnson" },
    { id: 2, name: "Bob Smith" },
    { id: 3, name: "Charlie Brown" },
    { id: 4, name: "Diana Prince" },
    { id: 5, name: "Dhruv Rathee" },
    { id: 6, name: "Elvish Yadav" },
    { id: 7, name: "Harry Shaw" },
    { id: 8, name: "John Cena" },
];

const AttendanceTracker = () => {
    const [attendance, setAttendance] = useState<Record<number, boolean>>({});

    const handleToggle = (id: number) => {
        setAttendance(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const handleSubmit = () => {
        const presentStudents = students.filter(student => attendance[student.id]);
        alert(`Attendance marked for: ${presentStudents.map(s => s.name).join(", ")}`);
        redirect('/dashboard');
    };

    return (
        <div className="flex justify-center items-center h-full bg-zinc-900 w-[calc(100vw-18rem)]">

            <Card className="bg-[#ededed] shadow-lg rounded-2xl w-[512px]">
                <CardContent className="p-6">
                    <h2 className="text-4xl font-semibold text-cyan-500 text-center">Attendance Tracker</h2>
                    <p className="text-gray-600 mb-8 text-center">Mark today&apos;s attendance easily.</p>
                    <ul className="w-52 m-auto">
                        {students.map(student => (
                            <li key={student.id} className="flex items-center justify-between mb-2">
                                <span className="text-lg">{student.name}</span>
                                <Checkbox
                                    checked={attendance[student.id] || false}
                                    onCheckedChange={() => handleToggle(student.id)}
                                />
                            </li>
                        ))}
                    </ul>
                    <Button className="mt-6 w-full bg-cyan-500 hover:bg-blue-700 hover:scale-105 transition delay-100 text-white text-lg" onClick={handleSubmit}>
                        Submit Attendance
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default AttendanceTracker;