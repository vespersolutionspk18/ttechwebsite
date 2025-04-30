'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionProps {
  question: string;
  answer: string;
}

export default function AccordionNew({ question, answer }: AccordionProps) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current) {
      setHeight(open ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [open]);

  return (
    <div className="bg-stone-950 border-[1px] border-stone-800 my-3 rounded-2xl shadow-[inset_-1px_-1px_0px_rgba(255,255,255,0.1),_inset_1px_1px_0px_rgba(0,0,0,0.5)] p-4 transition-all duration-300">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-left"
      >
        <span className="text-xl text-white/95">{question}</span>
        {open ? <ChevronUp className="w-5 h-5 text-white/95" /> : <ChevronDown className="w-5 h-5 text-white/95" />}
      </button>

      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <div className="mt-3 text-white/80 text-left text-sm">
          {answer}
        </div>
      </div>
    </div>
  );
}
