import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, CheckCircle2, Loader2, ChevronRight } from 'lucide-react';
import FrameworkMockup from './FrameworkMockups';
import { CATEGORY_STYLES } from './frameworkData';

export default function FrameworkCard({ framework }) {
  const [activeAction, setActiveAction] = useState(null);
  const [currentStep, setCurrentStep] = useState(-1);
  const [isRunning, setIsRunning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const timerRef = useRef(null);

  const runAction = (action) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setActiveAction(action);
    setCurrentStep(0);
    setIsRunning(true);
    setIsComplete(false);
  };

  const reset = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setActiveAction(null);
    setCurrentStep(-1);
    setIsRunning(false);
    setIsComplete(false);
  };

  useEffect(() => {
    if (!isRunning || !activeAction) return;
    if (currentStep >= activeAction.steps.length) {
      setIsRunning(false);
      setIsComplete(true);
      return;
    }
    timerRef.current = setTimeout(() => {
      setCurrentStep((s) => s + 1);
    }, 850);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isRunning, currentStep, activeAction]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const Icon = framework.icon;
  const progress = activeAction
    ? Math.min((currentStep / activeAction.steps.length) * 100, 100)
    : 0;

  return (
    <article className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden flex flex-col">
      {/* Header */}
      <div className="flex items-start gap-3 p-4 border-b border-gray-100">
        <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-sm font-bold text-gray-900">{framework.name}</h3>
            <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium capitalize ${CATEGORY_STYLES[framework.category]}`}>
              {framework.category}
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-0.5">{framework.tagline}</p>
        </div>
      </div>

      {/* Mockup */}
      <div className="p-4 bg-gray-50/50 border-b border-gray-100">
        <FrameworkMockup type={framework.mockupType} data={framework.mockupData} />
      </div>

      {/* Action Buttons */}
      <div className="p-3 flex gap-2 flex-wrap border-b border-gray-100">
        {framework.actions.map((action, i) => (
          <button
            key={i}
            onClick={() => runAction(action)}
            disabled={isRunning}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-medium hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Play className="w-3 h-3" />
            {action.label}
          </button>
        ))}
        {(isRunning || isComplete) && (
          <button
            onClick={reset}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 text-xs font-medium hover:bg-gray-50 transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            Reset
          </button>
        )}
      </div>

      {/* Workflow Panel */}
      {(isRunning || isComplete) && activeAction && (
        <div className="p-4 bg-gray-900">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-white/80 uppercase tracking-wide">Live Workflow</span>
            <span className="text-[10px] text-white/50">
              {isComplete ? 'Complete' : `Step ${Math.min(currentStep + 1, activeAction.steps.length)} / ${activeAction.steps.length}`}
            </span>
          </div>
          {/* Progress bar */}
          <div className="h-1 bg-white/10 rounded-full overflow-hidden mb-3">
            <div
              className={`h-full rounded-full transition-all duration-300 ${isComplete ? 'bg-green-500' : 'bg-indigo-400'}`}
              style={{ width: `${progress}%` }}
            />
          </div>
          {/* Steps */}
          <div className="space-y-1.5">
            {activeAction.steps.map((step, i) => {
              const done = i < currentStep;
              const current = i === currentStep && isRunning;
              return (
                <div
                  key={i}
                  className={`flex items-start gap-2 rounded-lg px-2.5 py-1.5 transition-all ${
                    done ? 'bg-white/5' : current ? 'bg-indigo-500/20 ring-1 ring-indigo-400/40' : 'opacity-30'
                  }`}
                >
                  <div className="mt-0.5 shrink-0">
                    {done ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                    ) : current ? (
                      <Loader2 className="w-3.5 h-3.5 text-indigo-300 animate-spin" />
                    ) : (
                      <div className="w-3.5 h-3.5 rounded-full border border-white/20" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-[11px] font-medium ${done || current ? 'text-white' : 'text-white/50'}`}>
                      {step.title}
                    </p>
                    {(done || current) && (
                      <p className={`text-[10px] ${current ? 'text-indigo-200' : 'text-white/40'}`}>
                        {step.detail}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          {isComplete && (
            <div className="mt-2 flex items-center gap-1.5 text-green-400 text-[11px] font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Workflow complete — review the write-up below
            </div>
          )}
        </div>
      )}

      {/* Write-up */}
      <div className="p-4 flex-1">
        <div className="flex items-start gap-2">
          <ChevronRight className="w-4 h-4 text-gray-300 shrink-0 mt-0.5" />
          <p className="text-xs text-gray-600 leading-relaxed">{framework.writeup}</p>
        </div>
      </div>
    </article>
  );
}