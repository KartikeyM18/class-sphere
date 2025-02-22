"use client"
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";

const studentGrades = [
    { id: 1, name: "Alice Johnson", grades: { Math: "A", Science: "B+", English: "A" } },
    { id: 2, name: "Bob Smith", grades: { Math: "B", Science: "E", English: "B+" } },
    { id: 3, name: "Charlie Brown", grades: { Math: "C", Science: "A", English: "E+" } },
    { id: 4, name: "Diana Prince", grades: { Math: "D", Science: "B", English: "F" } },
    { id: 5, name: "Dhruv Rathee", grades: { Math: "A+", Science: "A+", English: "A+" } },
    { id: 6, name: "Elvish Yadav", grades: { Math: "F", Science: "F", English: "F" } },
    { id: 7, name: "Harry Shaw", grades: { Math: "A", Science: "C+", English: "D+" } },
    { id: 8, name: "John Cena", grades: { Math: "B+", Science: "A", English: "A" } },
];

const calculateAverageGrade = (grades: Record<string, string>) => {
    const gradeValues: any = { "A+": 10, "A": 9, "B+": 8, "B": 7, "C+": 6, "C": 5, "D+": 4, "D": 3, "E+": 2, "E": 1, "F": 0 };
    const total = Object.values(grades).reduce((sum, grade) => sum + (gradeValues[grade] || 0), 0);
    return (total / Object.keys(grades).length).toFixed(2);
};

const AnalyticsDashboard = () => {
    const [editableGrades, setEditableGrades] = useState(studentGrades);

    const handleGradeChange = (id: number, subject: string, grade: string) => {
        setEditableGrades(prev => prev.map(student =>
            student.id === id ? { ...student, grades: { ...student.grades, [subject]: grade } } : student
        ));
    };

    return (
        <div className="flex justify-center items-center p-10 bg-zinc-900 w-[calc(100vw-18rem)]">

            <Card className="bg-white shadow-lg rounded-2xl w-[512px]">
                <CardContent className="p-6">
                    <h2 className="text-3xl font-semibold text-cyan-500">Analytics Dashboard</h2>
                    <p className="text-gray-600 mb-4 pb-4 border-b-4">View and edit student grades and performance.</p>
                    <ul>
                        {editableGrades.map(student => (
                            <li key={student.id} className="mb-4 pb-2 border-b-4">
                                <h3 className="text-xl font-semibold mb-3 italic uppercase ">{student.name}</h3>
                                <ul>
                                    {Object.entries(student.grades).map(([subject, grade]) => (
                                        <li key={subject} className="flex justify-between items-center mb-2">
                                            <span >{subject}</span>
                                            <input
                                                type="text"
                                                value={grade}
                                                onChange={(e) => handleGradeChange(student.id, subject, e.target.value)}
                                                className="border rounded px-2 py-1 text-center w-16"
                                            />
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-blue-500 font-semibold">Average Grade: {calculateAverageGrade(student.grades)}</p>
                            </li>
                        ))}
                    </ul>

                    <Button className="mt-6 w-full bg-blue-500 hover:bg-blue-700 text-white" onClick={() => redirect('/dashboard')}>
                        Done
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default AnalyticsDashboard;