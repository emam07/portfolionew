import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const useBinaryColumn = (length = 16, interval = 220) => {
  const [bits, setBits] = useState(() =>
    Array.from({ length }, () => Math.round(Math.random()))
  );
  useEffect(() => {
    const id = setInterval(() => {
      setBits((prev) => {
        const next = [...prev];
        const idx = Math.floor(Math.random() * length);
        next[idx] = next[idx] ^ 1;
        return next;
      });
    }, interval);
    return () => clearInterval(id);
  }, [length, interval]);
  return bits;
};

const Column = ({ bits, className }) => (
  <div
    className={`pointer-events-none select-none font-mono text-sm leading-relaxed text-cyan-400/15 ${className}`}
    aria-hidden="true"
  >
    {bits.map((b, i) => (
      <div key={i}>{b}</div>
    ))}
  </div>
);

const BinaryQuote = () => {
  const left = useBinaryColumn(14, 200);
  const right = useBinaryColumn(14, 280);

  return (
    <div className="relative border-b border-neutral-900 px-4 py-32">
      <Column
        bits={left}
        className="absolute left-4 top-1/2 hidden -translate-y-1/2 md:block"
      />
      <Column
        bits={right}
        className="absolute right-4 top-1/2 hidden -translate-y-1/2 md:block"
      />

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <p className="mb-8 font-mono text-xs uppercase tracking-[0.4em] text-neutral-500">
          — a developer's tagline —
        </p>
        <blockquote className="font-mono text-3xl font-thin leading-tight tracking-tight md:text-5xl">
          <span className="text-neutral-600">"</span>
          I describe who I am
          <br />
          in <span className="font-medium text-cyan-400">0</span>s and{" "}
          <span className="font-medium text-cyan-400">1</span>s
          <span className="text-neutral-600">."</span>
        </blockquote>
        <p className="mt-10 font-mono text-sm tracking-wider text-neutral-500">
          — emk
        </p>
      </motion.div>
    </div>
  );
};

export default BinaryQuote;
