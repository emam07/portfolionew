import { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";
import { motion } from "framer-motion";

const COUNTER_URL = "https://api.counterapi.dev/v1/emam07-portfolio/bell-rings";
const STORAGE_KEY = "emk_bell_rang";

const BellRinger = () => {
  const [count, setCount] = useState(null);
  const [hasRung, setHasRung] = useState(false);
  const [isRinging, setIsRinging] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY) === "1") {
      setHasRung(true);
    }
    fetch(COUNTER_URL)
      .then((r) => r.json())
      .then((d) => setCount(typeof d.count === "number" ? d.count : 0))
      .catch(() => setCount(0));
  }, []);

  const ring = async () => {
    if (hasRung) return;
    setIsRinging(true);
    setHasRung(true);
    localStorage.setItem(STORAGE_KEY, "1");
    setTimeout(() => setIsRinging(false), 1000);
    try {
      const r = await fetch(`${COUNTER_URL}/up`);
      const d = await r.json();
      setCount(typeof d.count === "number" ? d.count : (count ?? 0) + 1);
    } catch {
      setCount((c) => (c ?? 0) + 1);
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Ring the <span className="text-neutral-400">Bell</span>
      </motion.h1>

      <div className="flex flex-col items-center">
        <p className="mb-8 font-mono text-sm text-neutral-500">
          {`// if (visitor.stoppedBy) ringBell();`}
        </p>

        <motion.button
          onClick={ring}
          disabled={hasRung}
          animate={isRinging ? { rotate: [0, -25, 25, -20, 20, -10, 10, 0] } : {}}
          transition={{ duration: 1 }}
          whileHover={!hasRung ? { scale: 1.1 } : {}}
          whileTap={!hasRung ? { scale: 0.95 } : {}}
          className={`mb-8 text-7xl transition-colors ${
            hasRung
              ? "cursor-default text-cyan-400"
              : "cursor-pointer text-neutral-400 hover:text-cyan-400"
          }`}
          aria-label="Ring the bell"
        >
          <FaBell />
        </motion.button>

        <div className="rounded-lg border border-neutral-800 bg-neutral-950/40 px-8 py-4 font-mono">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400"></span>
            visitors_count
          </div>
          <div className="text-3xl font-bold text-cyan-400">
            {count !== null ? count.toLocaleString() : "..."}
          </div>
        </div>

        <p className="mt-6 h-4 font-mono text-xs text-neutral-500">
          {hasRung ? "✓ ack received · status: 200 OK" : "⏵ awaiting input..."}
        </p>
      </div>
    </div>
  );
};

export default BellRinger;
