import React, { useState } from 'react';
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Loader2, FileText, Download, Copy, CheckCheck } from 'lucide-react';
import { LOGO_URL } from '@/components/NavigationConfig';

export default function Text() {
    const [prompt, setPrompt] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [copied, setCopied] = useState(false);

    const generateText = async () => {
        if (!prompt.trim()) return;
        
        setLoading(true);
        setResult(null);
        
        try {
            const response = await base44.integrations.Core.InvokeLLM({
                prompt: `Write 16 detailed paragraphs about: "${prompt}". Each paragraph must contain exactly 8 sentences. Make it comprehensive, informative, and well-structured. Return as JSON with this format: { "paragraphs": ["paragraph 1 text...", "paragraph 2 text...", ...] }`,
                response_json_schema: {
                    type: "object",
                    properties: {
                        paragraphs: {
                            type: "array",
                            items: { type: "string" }
                        }
                    }
                }
            });
            
            setResult(response.paragraphs || []);
        } catch (error) {
            console.error('Failed to generate text:', error);
            alert('Failed to generate text. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleCopy = () => {
        if (!result) return;
        const text = result.join('\n\n');
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleDownload = () => {
        if (!result) return;
        const text = result.join('\n\n');
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${prompt.substring(0, 30)}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 p-4 md:p-8">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <img src={LOGO_URL} alt="Logo" className="w-16 h-16 mx-auto mb-4 rounded-xl shadow-lg" />
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-2">Text Generator</h1>
                    <p className="text-gray-600">AI-powered long-form content creation</p>
                </div>

                {/* Input Section */}
                <Card className="p-6 mb-6 shadow-xl border-2 border-purple-200 bg-white">
                    <div className="flex flex-col gap-4">
                        <div className="relative">
                            <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <Input
                                placeholder="Enter your topic or prompt..."
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                onKeyPress={(e) => { if (e.key === 'Enter') generateText(); }}
                                className="pl-12 h-14 text-lg border-2 border-gray-200 focus:border-purple-500"
                            />
                        </div>
                        <Button
                            onClick={generateText}
                            disabled={!prompt.trim() || loading}
                            className="h-14 text-lg font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                    Generating 16 Paragraphs...
                                </>
                            ) : (
                                <>
                                    <FileText className="w-5 h-5 mr-2" />
                                    Generate Text
                                </>
                            )}
                        </Button>
                    </div>
                </Card>

                {/* Result Section */}
                {result && result.length > 0 && (
                    <Card className="p-6 md:p-8 shadow-xl border-2 border-gray-200 bg-white">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-900">Generated Content</h2>
                            <div className="flex gap-2">
                                <Button
                                    onClick={handleCopy}
                                    variant="outline"
                                    className="gap-2"
                                >
                                    {copied ? (
                                        <>
                                            <CheckCheck className="w-4 h-4" />
                                            Copied!
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="w-4 h-4" />
                                            Copy
                                        </>
                                    )}
                                </Button>
                                <Button
                                    onClick={handleDownload}
                                    variant="outline"
                                    className="gap-2"
                                >
                                    <Download className="w-4 h-4" />
                                    Download
                                </Button>
                            </div>
                        </div>
                        
                        <div className="space-y-6 text-gray-800 leading-relaxed">
                            {result.map((paragraph, index) => (
                                <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                    <div className="flex items-start gap-3">
                                        <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                                            {index + 1}
                                        </span>
                                        <p className="flex-1 text-justify">
                                            {paragraph}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 text-center text-sm text-gray-500">
                            Total: {result.length} paragraphs generated
                        </div>
                    </Card>
                )}

                {/* Info Cards */}
                {!result && !loading && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                        <Card className="p-6 text-center bg-white shadow-lg border-2 border-purple-100">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <FileText className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">16 Paragraphs</h3>
                            <p className="text-sm text-gray-600">Each with 8 detailed sentences</p>
                        </Card>
                        <Card className="p-6 text-center bg-white shadow-lg border-2 border-indigo-100">
                            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Copy className="w-6 h-6 text-indigo-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Easy Export</h3>
                            <p className="text-sm text-gray-600">Copy or download as text file</p>
                        </Card>
                        <Card className="p-6 text-center bg-white shadow-lg border-2 border-blue-100">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Loader2 className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">AI Powered</h3>
                            <p className="text-sm text-gray-600">Advanced language model generation</p>
                        </Card>
                    </div>
                )}
            </div>
        </div>
    );
}