import React, { useEffect } from 'react';
import PageMeta from '@/components/PageMeta';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Sparkles, Radio, Brain, BarChart3, GraduationCap, ListTodo, Lightbulb, StickyNote, Newspaper, Gamepad2, Globe, Smartphone } from "lucide-react";

const pages = [
    { name: 'Qwirey', page: 'Qwirey', icon: Sparkles, description: 'Your all-in-one Ai assistant, powered by Qwirey', color: '#6209e6', colorEnd: '#4f46e5' },
    { name: 'MindMap', page: 'MindMap', icon: Brain, description: 'Ai-powered knowledge visualization and exploration', color: '#db2777', colorEnd: '#e11d48' },
    { name: 'SearchPods', page: 'SearchPods', icon: Radio, description: 'Ai-generated podcasts on any topic with voice playback', color: '#2563eb', colorEnd: '#0891b2' },
    { name: 'News', page: 'News', icon: Newspaper, description: 'AI-powered news aggregator across topics', color: '#dc2626', colorEnd: '#ea580c' },
    { name: 'Learning', page: 'Learning', icon: GraduationCap, description: 'Navigate knowledge islands with progress tracking', color: '#059669', colorEnd: '#0d9488' },
    { name: 'Geospatial', page: 'Geospatial', icon: Globe, description: 'Global data intelligence across 18 domains', color: '#4f46e5', colorEnd: '#6209e6' },
    { name: 'Intelligence', page: 'Intelligence', icon: Lightbulb, description: 'AI predictive analytics and scenario modeling', color: '#4f46e5', colorEnd: '#6209e6' },
    { name: 'Games', page: 'Games', icon: Gamepad2, description: 'Learn while you play with Word Shooter', color: '#6209e6', colorEnd: '#db2777' },
    { name: 'Appstore', page: 'Appstore', icon: Smartphone, description: 'Download our AI-powered mobile apps', color: '#2563eb', colorEnd: '#6209e6' },
    { name: 'Tasks', page: 'Tasks', icon: ListTodo, description: 'Track initiatives across all departments', color: '#7c3aed', colorEnd: '#6209e6' },
    { name: 'Notes', page: 'Notes', icon: StickyNote, description: 'Rich text notes with Ai assistance', color: '#db2777', colorEnd: '#e11d48' },
];

export default function HomePage() {

    return (
        <>
            <PageMeta 
                title="Home - AI Platform"
                description="AI-powered platform with smart agents designed to boost productivity, efficiency, and growth across all domains."
                keywords="1cPublishing, AI platform, AI agents, productivity tools, smart automation"
            />
            <div className="p-4 md:p-8">
                <div className="max-w-5xl mx-auto">
                <h1 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">Welcome to Agentic Ai Demo</h1>
                <p className="mb-6 md:mb-8 text-gray-600">AgenticAI from the 1C Platform introduces a new generation of autonomous AI agents engineered to operate with minimal human oversight. Instead of relying on predefined scripts, these agents apply cognitive reasoning to interpret context, detect patterns, and make informed decisions in real time. Their architecture is optimized for speed and scale, allowing them to process tasks in under 100 milliseconds and execute millions of micro‑actions per day. This combination of rapid computation and contextual intelligence positions the system as a powerful engine for high‑throughput automation.
</p>

<p className="mb-6 md:mb-8 text-gray-600">A defining strength of AgenticAI is its multi‑agent orchestration framework. Rather than functioning as isolated bots, agents can be organized into coordinated teams, each specializing in a particular domain—customer support, analytics, sales operations, or workflow optimization. These agents communicate, delegate, and synchronize tasks with one another, enabling them to handle complex, multi‑step processes that traditionally require human collaboration. The result is a flexible ecosystem capable of managing end‑to‑end business operations with precision and consistency.</p>

<p className="mb-6 md:mb-8 text-gray-600">
The platform is also built for continuous learning. Every interaction, decision, and outcome feeds back into the system, allowing the agents to refine their models, improve accuracy, and adapt to new scenarios. Over time, this creates a compounding effect: predictions become sharper, responses more relevant, and automation more reliable. This self‑improving loop ensures that organizations benefit not only from immediate efficiency gains but also from long‑term intelligence growth.</p>

<p className="mb-6 md:mb-8 text-gray-600">
By combining autonomy, speed, collaboration, and adaptive learning, AgenticAI positions itself as a scalable solution for intelligent automation across industries. Whether deployed in enterprise workflows, customer‑facing services, or internal analytics, it aims to boost productivity and augment human capability. The vision is clear: an AI‑powered platform that doesn’t just automate tasks but elevates decision‑making, accelerates operations, and ultimately makes its users smarter.</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {pages.map((page) => (
                        <Link key={page.name} to={createPageUrl(page.page)} className="group">
                            <div 
                                className="rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1 text-white h-full"
                                style={{ background: `linear-gradient(to bottom right, ${page.color}, ${page.colorEnd})` }}
                            >
                                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                                    <page.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="font-bold text-xl mb-2">{page.name}</h3>
                                <p className="text-white/80 text-sm">{page.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
}