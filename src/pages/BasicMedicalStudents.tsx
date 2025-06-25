import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const resources = [
    { title: "Anatomy Crash Course", url: "https://www.youtube.com/playlist?list=PLrZrqFkB1K0zj1g1QnQ2QvQnQ2QvQnQ2Qv" },
    { title: "Physiology Basics", url: "https://www.khanacademy.org/science/health-and-medicine/human-anatomy-and-physiology" },
    { title: "First Aid for the USMLE Step 1", url: "https://www.amazon.com/First-Aid-USMLE-Step-2024/dp/126484924X/" },
    { title: "Osmosis Study Platform", url: "https://www.osmosis.org/" },
];

const tips = [
    "Stay organized with a study schedule.",
    "Join a study group for collaborative learning.",
    "Use spaced repetition for memorization.",
    "Don't hesitate to ask professors for help.",
    "Take care of your mental and physical health.",
];

const faqs = [
    { q: "How do I prepare for exams?", a: "Start early, review regularly, and practice with past papers." },
    { q: "What resources are best for beginners?", a: "Textbooks, online videos, and flashcards are great starting points." },
    { q: "How do I balance study and life?", a: "Prioritize tasks, take breaks, and maintain hobbies outside of medicine." },
];

const BasicMedicalStudents = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
            <Link to="/">
                <Button variant="outline" className="mb-6">← Back to Home</Button>
            </Link>
            <h1 className="text-4xl font-bold text-blue-700 mb-4">Basic Medical Students</h1>
            <p className="text-lg text-gray-700 mb-8">Welcome! Here you'll find essential resources, tips, and answers to common questions to help you thrive in your early medical studies.</p>

            <Card className="mb-8">
                <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-600">Top Study Resources</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        {resources.map((res, i) => (
                            <li key={i}>
                                <a href={res.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{res.title}</a>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

            <Card className="mb-8">
                <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-600">Tips for Success</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        {tips.map((tip, i) => (
                            <li key={i}>{tip}</li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-600">Frequently Asked Questions</h2>
                    <ul className="space-y-4">
                        {faqs.map((faq, i) => (
                            <li key={i}>
                                <strong className="block text-gray-800 mb-1">Q: {faq.q}</strong>
                                <span className="text-gray-600">A: {faq.a}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
    </div>
);

export default BasicMedicalStudents; 