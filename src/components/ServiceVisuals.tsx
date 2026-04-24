import { motion } from 'framer-motion';

export const MobileVisual = () => (
  <div className="relative w-40 h-80 bg-foreground/10 rounded-[3rem] border-8 border-foreground/20 overflow-hidden shadow-2xl scale-90 md:scale-100 origin-right">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-foreground/20 rounded-b-2xl" />
    <div className="p-6 pt-12 space-y-4">
      {[1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={i}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.1, repeat: Infinity, repeatType: 'reverse', duration: 2.5 }}
          className="h-12 bg-foreground/5 rounded-2xl border border-foreground/10"
        />
      ))}
    </div>
  </div>
);

export const WebVisual = () => (
  <div className="relative w-full h-48 bg-foreground/5 rounded-2xl border-2 border-foreground/10 overflow-hidden shadow-xl p-4">
    <div className="flex gap-2 mb-4">
      <div className="w-3 h-3 rounded-full bg-red-500/40" />
      <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
      <div className="w-3 h-3 rounded-full bg-green-500/40" />
    </div>
    <div className="grid grid-cols-4 gap-4">
      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="col-span-3 h-28 bg-foreground/10 rounded-xl"
      />
      <div className="space-y-4">
        <div className="h-12 bg-foreground/5 rounded-xl" />
        <div className="h-12 bg-foreground/5 rounded-xl" />
      </div>
    </div>
  </div>
);

export const CloudVisual = () => (
  <div className="relative w-full h-40 flex items-center justify-center overflow-hidden">
    <div className="relative w-64 h-32">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            opacity: [0.5, 0.9, 0.5]
          }}
          transition={{
            duration: 4,
            delay: i * 1.2,
            repeat: Infinity,
          }}
          className="absolute h-12 w-32 bg-foreground/10 rounded-full blur-xl"
          style={{
            left: `${i * 25}%`,
            top: `${10 + i * 25}%`
          }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="w-24 h-24 rounded-full bg-foreground/10 border-2 border-foreground/20 backdrop-blur-md flex items-center justify-center"
        >
          <div className="w-12 h-12 rounded-full border-t-2 border-foreground/40 animate-spin" />
        </motion.div>
      </div>
    </div>
  </div>
);

export const AIVisual = () => (
  <div className="relative w-full h-40 flex items-center justify-center">
    <div className="relative w-40 h-40">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ rotate: 360 }}
          transition={{ duration: 10 - i, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border border-foreground/10 rounded-full"
          style={{ transform: `scale(${0.2 + i * 0.12})` }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            boxShadow: ["0 0 10px rgba(255,255,255,0.1)", "0 0 30px rgba(255,255,255,0.3)", "0 0 10px rgba(255,255,255,0.1)"]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-4 h-4 bg-foreground rounded-full"
        />
      </div>
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ x: [0, 60, 0], y: [0, -30, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 3, delay: i * 0.7, repeat: Infinity }}
          className="absolute inset-0 m-auto w-1 h-1 bg-foreground/40 rounded-full"
        />
      ))}
    </div>
  </div>
);

export const DesignVisual = () => (
  <div className="relative w-full h-48 bg-foreground/5 rounded-3xl border-2 border-foreground/10 p-6 overflow-hidden">
    <div className="flex gap-6 h-full">
      <div className="w-1/3 space-y-4">
        <div className="h-6 w-full bg-foreground/20 rounded shadow-inner" />
        <div className="h-32 w-full bg-foreground/5 rounded-2xl border-2 border-dashed border-foreground/20" />
      </div>
      <div className="flex-1 relative">
        <motion.div
          animate={{
            x: [0, 50, 100, 20, 0],
            y: [0, 40, 80, 20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-6 text-foreground drop-shadow-[0_4px_4px_rgba(0,0,0,0.2)]"
        >
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.157 21.435l-4.592-20 18.232 10.368-8.242 2.872 10.054 6.76-15.452 0z" /></svg>
        </motion.div>
        <motion.div
          animate={{ width: [40, 100, 40], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-12 left-0 h-20 bg-foreground/10 rounded-2xl border border-foreground/20"
        />
      </div>
    </div>
  </div>
);

export const SEOVisual = () => (
  <div className="w-full h-40 flex items-end justify-between px-6 gap-3 pb-4 overflow-hidden">
    {[0.3, 0.6, 0.4, 0.8, 0.5, 1, 0.7, 0.9].map((h, i) => (
      <motion.div
        key={i}
        initial={{ height: 0 }}
        animate={{ height: `${h * 100}%` }}
        transition={{ duration: 1.5, delay: i * 0.15, repeat: Infinity, repeatType: 'reverse' }}
        className="flex-1 bg-foreground/15 rounded-t-xl relative group-hover:bg-foreground/30 transition-colors"
      >
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
          className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground/40 rounded-full"
        />
      </motion.div>
    ))}
  </div>
);

export const AutomationVisual = () => (
  <div className="relative w-full h-40 flex items-center justify-center">
    <div className="flex items-center gap-12 relative">
      <div className="w-14 h-14 rounded-2xl bg-foreground/10 border-2 border-foreground/20 flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-foreground/40 rounded animate-bounce" />
      </div>
      <div className="relative w-24 h-1 bg-foreground/20 rounded-full overflow-hidden">
        <motion.div
          animate={{ left: ["-20%", "120%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 w-8 h-full bg-gradient-to-r from-transparent via-foreground to-transparent shadow-[0_0_10px_rgba(var(--foreground),0.5)]"
        />
      </div>
      <div className="w-14 h-14 rounded-full bg-foreground/10 border-2 border-foreground/20 shadow-lg flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="w-6 h-6 border-2 border-dashed border-foreground/40 rounded-full"
        />
      </div>
    </div>
  </div>
);

export const EcommerceVisual = () => (
  <div className="relative w-full h-40 flex items-center justify-center overflow-hidden">
    <div className="relative w-40 h-32 bg-foreground/5 rounded-2xl border-2 border-foreground/10 p-4">
      <div className="flex gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-foreground/10" />
        <div className="flex-1 space-y-2">
          <div className="h-3 w-full bg-foreground/20 rounded" />
          <div className="h-3 w-2/3 bg-foreground/10 rounded" />
        </div>
      </div>
      <motion.div
        animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="w-12 h-12 bg-foreground text-background rounded-full absolute -bottom-4 -right-4 flex items-center justify-center shadow-2xl"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" /></svg>
      </motion.div>
    </div>
  </div>
);

export const WordPressVisual = () => (
  <div className="relative w-full h-40 flex items-center justify-center">
    <div className="grid grid-cols-2 gap-2 w-32 h-32">
      {[1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
          className="bg-foreground/10 rounded-xl border border-foreground/20 flex items-center justify-center font-bold text-foreground/40"
        >
          {i}
        </motion.div>
      ))}
    </div>
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 border-2 border-dashed border-foreground/5 rounded-full"
    />
  </div>
);

export const SupportVisual = () => (
  <div className="relative w-full h-40 flex items-center justify-center overflow-hidden">
    <svg viewBox="0 0 400 100" className="w-full h-24 stroke-foreground/40 fill-none stroke-[3]">
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        d="M0,50 L50,50 L70,20 L90,80 L110,50 L200,50 L220,10 L240,90 L260,50 L400,50"
      />
      <motion.circle
        r="4"
        className="fill-foreground shadow-lg"
        animate={{ cx: [0, 400] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        style={{ cy: 50 }}
      />
    </svg>
  </div>
);
