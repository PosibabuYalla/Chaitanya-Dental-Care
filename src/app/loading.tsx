export default function Loading() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="glass-highlight flex h-20 w-20 items-center justify-center rounded-full glass-tint shadow-glass">
          <svg width="30" height="34" viewBox="0 0 30 34" fill="none" className="animate-bounce">
            <path
              d="M15 1.5c-3.6 0-5.7 2.1-7.8 2.1C4.9 3.6 2 5.4 2 10.3c0 4.4 1.4 8.9 2.7 12.8 1 3 1.9 6.7 4.2 8.6 1 .8 1.9.8 2.5-.4.8-1.6 1-5.6 2.2-5.6s1.4 4 2.2 5.6c.6 1.2 1.5 1.2 2.5.4 2.3-1.9 3.2-5.6 4.2-8.6C23.6 19.2 25 14.7 25 10.3c0-4.9-2.9-6.7-5.2-6.7-2.1 0-4.2-2.1-7.8-2.1Z"
              fill="#ffffff"
              stroke="#38b6e8"
              strokeWidth="1.2"
            />
          </svg>
        </div>
        <p className="text-sm font-semibold text-ink-soft">Loading&hellip;</p>
      </div>
    </div>
  );
}
