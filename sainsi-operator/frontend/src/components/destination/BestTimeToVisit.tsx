'use client';

export function BestTimeToVisit() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  // Mock data for suitability (0-100)
  const scores = [30, 40, 60, 85, 95, 100, 95, 90, 85, 70, 50, 40];

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 h-full">
      <h3 className="text-xl font-semibold mb-2">Best Time To Visit</h3>
      <p className="text-sm text-gray-400 mb-8">Peak season is May - August.</p>

      <div className="flex items-end h-32 gap-1 mb-4">
        {scores.map((score, i) => (
          <div key={i} className="flex-1 flex flex-col justify-end group">
            <div
              className={`w-full rounded-t-sm transition-all duration-300 ${score > 80 ? 'bg-indigo-500' : score > 50 ? 'bg-indigo-500/50' : 'bg-gray-700'}`}
              style={{ height: `${score}%` }}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between text-xs text-gray-500 font-medium">
        {months.map((m) => <span key={m} className="flex-1 text-center">{m[0]}</span>)}
      </div>
    </div>
  );
}
