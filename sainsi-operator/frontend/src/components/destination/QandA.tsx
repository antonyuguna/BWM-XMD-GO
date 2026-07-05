'use client';

import { ThumbsUp, ThumbsDown, Sparkles } from 'lucide-react';

const questions = [
  {
    id: 1,
    user: "Sarah M.",
    question: "Is it safe to drink tap water in Ubud?",
    upvotes: 45,
    answers: [
      {
        author: "SAINSI AI",
        isAi: true,
        content: "It is highly recommended NOT to drink tap water in Bali. Stick to bottled or filtered water. Most hotels and restaurants provide safe drinking water.",
        upvotes: 89
      },
      {
        author: "Bali Local Guides",
        isAi: false,
        content: "Yes, please use bottled water even for brushing teeth to be safe!",
        upvotes: 12
      }
    ]
  },
  {
    id: 2,
    user: "David K.",
    question: "Do I need an international driving permit to rent a scooter?",
    upvotes: 32,
    answers: [
      {
        author: "SAINSI AI",
        isAi: true,
        content: "Yes, technically you need an International Driving Permit (IDP) with a motorcycle endorsement to legally drive a scooter in Bali. Without it, your travel insurance may be void in an accident.",
        upvotes: 56
      }
    ]
  }
];

export function QandA() {
  return (
    <div className="space-y-6">
      {questions.map(q => (
        <div key={q.id} className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <div className="flex gap-4">
            <div className="flex flex-col items-center gap-1 text-gray-500">
              <button
                className="hover:text-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-sm transition-colors"
                aria-label="Upvote question"
              >
                <ThumbsUp className="h-4 w-4" />
              </button>
              <span className="text-sm font-medium">{q.upvotes}</span>
              <button
                className="hover:text-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 rounded-sm transition-colors"
                aria-label="Downvote question"
              >
                <ThumbsDown className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1">
              <h4 className="text-lg font-medium text-white mb-1">{q.question}</h4>
              <p className="text-xs text-gray-500 mb-4">Asked by {q.user}</p>

              <div className="space-y-3">
                {q.answers.map((a, i) => (
                  <div key={i} className={`p-4 rounded-xl text-sm ${a.isAi ? 'bg-indigo-950/30 border border-indigo-500/20' : 'bg-black/30 border border-gray-800'}`}>
                    <div className="flex items-center gap-2 mb-2">
                      {a.isAi && <Sparkles className="h-3 w-3 text-indigo-400" />}
                      <span className={`font-semibold ${a.isAi ? 'text-indigo-400' : 'text-gray-300'}`}>{a.author}</span>
                      <span className="text-gray-500 text-xs flex items-center gap-1 ml-auto"><ThumbsUp className="h-3 w-3"/> {a.upvotes}</span>
                    </div>
                    <p className="text-gray-300">{a.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
