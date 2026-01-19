import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { Button } from '@/app/components/ui/button';
import {
  Search,
  Layers,
  ArrowRight,
  Zap,
  Shield,
  Code2,
  Activity,
  CheckCircle2,
  TrendingUp,
  BarChart3
} from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'motion/react';

// --- Ultra-Premium Utility Components ---

const Magnetic = ({ children, strength = 0.5 }: { children: React.ReactNode; strength?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const moveX = (clientX - centerX) * strength;
    const moveY = (clientY - centerY) * strength;
    x.set(moveX);
    y.set(moveY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
};

const MeshGradient = () => (
  <div className="absolute inset-0 overflow-hidden -z-30 pointer-events-none">
    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#4f46e5]/10 rounded-full blur-[120px] animate-blob" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#06b6d4]/10 rounded-full blur-[120px] animate-blob animation-delay-2000" />
    <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-[#8b5cf6]/10 rounded-full blur-[120px] animate-blob animation-delay-4000" />
  </div>
);

const SectionDivider = ({ label, index }: { label?: string; index?: string }) => (
  <div className="relative w-full  flex items-center justify-center overflow-hidden border border-border/50">
    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

    {(label || index) && (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 bg-background px-6 py-2 flex items-center gap-4 border border-border/50 rounded-full backdrop-blur-sm"
      >
        {index && <span className="text-[10px] font-black text-primary/50 tracking-widest uppercase">{index}</span>}
        {index && label && <div className="w-1 h-1 rounded-full bg-border" />}
        {label && <span className="text-[10px] font-black text-foreground/40 tracking-widest uppercase">{label}</span>}
      </motion.div>
    )}
  </div>
);

const DecorativeGrid = () => (
  <div className="absolute inset-0 -z-20 pointer-events-none overflow-hidden h-full">
    <svg className="w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    </svg>
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
  </div>
);

const TechnicalLines = () => (
  <div className="absolute inset-0 -z-15 pointer-events-none opacity-20">
    <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none">
      <motion.path
        d="M -100 200 L 400 200 L 450 250 L 1000 250 L 1050 300 L 1600 300"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="4 4"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.circle
        cx="450" cy="250" r="2" fill="currentColor"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 1 }}
      />
      <motion.circle
        cx="1050" cy="300" r="2" fill="currentColor"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 1.5 }}
      />
    </svg>
  </div>
);

const CircuitBackground = () => (
  <div className="absolute inset-0 -z-10 pointer-events-none opacity-10">
    <svg className="w-full h-full" viewBox="0 0 800 800" fill="none">
      <path d="M 100 0 V 800 M 200 0 V 800 M 300 0 V 800 M 400 0 V 800 M 500 0 V 800 M 600 0 V 800 M 700 0 V 800" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
      <path d="M 0 100 H 800 M 0 200 H 800 M 0 300 H 800 M 0 400 H 800 M 0 500 H 800 M 0 600 H 800 M 0 700 H 800" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
      <motion.path
        d="M 100 100 H 300 V 300 H 500 V 500"
        stroke="currentColor"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 3, ease: "linear", repeat: Infinity }}
      />
      <circle cx="100" cy="100" r="3" fill="currentColor" />
      <circle cx="300" cy="300" r="3" fill="currentColor" />
      <circle cx="500" cy="500" r="3" fill="currentColor" />
    </svg>
  </div>
);

const SpotlightCard = ({ children, className, onMouseEnter, onMouseLeave }: { children: React.ReactNode; className?: string; onMouseEnter?: () => void; onMouseLeave?: () => void }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;
    rotateY.set(xPct * 10);
    rotateX.set(yPct * -10);
  }

  function handleMouseLeaveInternal() {
    rotateX.set(0);
    rotateY.set(0);
    onMouseLeave?.();
  }

  const springRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeaveInternal}
      onMouseEnter={onMouseEnter}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
      }}
      className={`group relative spotlight-container rounded-3xl glass-dark border border-white/10 transition-colors hover:border-primary/50 ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              oklch(var(--primary) / 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(var(--primary-rgb), 0.4),
              transparent 60%
            )
          `,
        }}
      />
      <div className="relative z-20 h-full">{children}</div>
    </motion.div>
  );
};

const ScrollReveal = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: [0.215, 0.61, 0.355, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const TextReveal = ({ text, className }: { text: string; className?: string }) => {
  const words = text.split(" ");
  return (
    <div className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <div key={i} className="overflow-hidden mr-[0.25em] mb-1">
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: i * 0.05,
              ease: [0.215, 0.61, 0.355, 1],
            }}
          >
            {word}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export function Home() {
  const [email, setEmail] = useState('');
  const [hoveredStage, setHoveredStage] = useState<string | null>(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const springY = useSpring(backgroundY, { stiffness: 100, damping: 30 });

  return (
    <div ref={containerRef} className="min-h-screen bg-background selection:bg-primary/30 relative overflow-hidden font-sans">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 bg-noise opacity-[0.02] pointer-events-none z-[100]" />
      <div className="fixed inset-0 light-beam opacity-40 z-0" />
      <div className="fixed inset-0 light-beam opacity-20 z-0" style={{ animationDelay: '-5s', width: '600px' }} />
      <div className="fixed inset-0 scanline pointer-events-none z-[99]" />

      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center pt-24 pb-16 overflow-hidden">
        <MeshGradient />
        <DecorativeGrid />
        <TechnicalLines />
        <motion.div
          style={{ y: springY }}
          className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-primary/5 rounded-full blur-[150px] -z-10 animate-pulse-slow"
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">

            {/* Left Content */}
            <div className="flex flex-col space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-3 px-5 py-2 rounded-full bg-primary/5 border border-primary/10 w-fit"
              >
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gradient">Digital Engineering // v2.0</span>
              </motion.div>

              <div className="space-y-6">
                <TextReveal
                  text="Engineering Your Digital Future"
                  className="text-3xl lg:text-4xl font-bold leading-tight tracking-tighter"
                />
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  transition={{ delay: 0.6 }}
                  className="text-xl text-muted-foreground leading-relaxed max-w-lg font-medium border-l-2 border-primary/20 pl-8 py-2"
                >
                  We build robust, scalable digital architectures. Engineered for innovators who demand technical excellence and seamless user experiences.
                </motion.p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-8 pt-4">
                <Magnetic strength={0.2}>
                  <Button size="lg" className="h-20 px-16 rounded-full text-xl font-black shadow-2xl shadow-primary/40 hover:scale-105 active:scale-95 transition-all bg-gradient-to-r from-primary via-accent to-primary animate-gradient-xy group relative overflow-hidden" asChild>
                    <Link to="/contact">
                      <span className="relative z-10 flex items-center">
                        Start Your Project
                        <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                      </span>
                    </Link>
                  </Button>
                </Magnetic>

                <div className="flex items-center space-x-6">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-2 border-background bg-muted overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i + 40}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-bold whitespace-nowrap opacity-60 uppercase tracking-widest">Trusted by 50+ Enterprises</div>
                    <div className="flex gap-1 h-1 w-full bg-border rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, delay: 1 }}
                        className="h-full bg-primary"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-16 pt-16 border-t border-border/10">
                {[
                  { label: "Uptime", value: "99.9%", sub: "SLA Guaranteed" },
                  { label: "Velocity", value: "2x", sub: "Faster Delivery" },
                  { label: "Success", value: "100%", sub: "Project Rate" },
                  { label: "Support", value: "24/7", sub: "Global Devs" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                  >
                    <div className="text-3xl font-bold mb-1 tracking-tighter">{item.value}</div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-1">{item.label}</div>
                    <div className="text-[10px] text-muted-foreground font-medium tracking-widest">{item.sub}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side - Hero Viz */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative aspect-square w-full max-w-[550px]"
              >
                {/* Visualizer SVG */}
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_50px_rgba(var(--primary),0.2)]">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.05" className="text-primary/10" />
                  <motion.circle
                    cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.3" strokeDasharray="1, 4"
                    className="text-primary/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.circle
                    cx="50" cy="50" r="32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="80, 120"
                    className="text-accent/20"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  />
                  <circle cx="50" cy="50" r="8" className="fill-primary" />
                  <motion.circle
                    cx="50" cy="50" r="8"
                    fill="none" stroke="currentColor" strokeWidth="0.5"
                    className="text-primary"
                    animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </svg>

                {/* Data Cards Overlay */}
                <div className="absolute top-[10%] -left-12">
                  <Magnetic strength={0.3}>
                    <div className="glass-dark p-6 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-3xl w-48">
                      <div className="flex items-center gap-3 mb-3">
                        <Activity className="w-4 h-4 text-primary" />
                        <span className="text-[10px] font-black tracking-widest uppercase opacity-40">Live Pulse</span>
                      </div>
                      <div className="text-2xl font-bold mb-2">1,204</div>
                      <div className="flex gap-1 h-6 items-end">
                        {[40, 60, 30, 80, 50, 70].map((h, i) => (
                          <motion.div
                            key={i}
                            animate={{ height: [`${h}%`, `${h + 10}%`, `${h}%`] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                            className="w-1.5 bg-primary/40 rounded-full"
                          />
                        ))}
                      </div>
                    </div>
                  </Magnetic>
                </div>

                <div className="absolute bottom-[20%] -right-8">
                  <Magnetic strength={0.3}>
                    <div className="glass-dark p-6 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-3xl w-52">
                      <div className="flex items-center gap-3 mb-3">
                        <TrendingUp className="w-4 h-4 text-accent" />
                        <span className="text-[10px] font-black tracking-widest uppercase opacity-40">Conversion</span>
                      </div>
                      <div className="text-2xl font-bold mb-1">8.42%</div>
                      <div className="text-[9px] font-black text-green-500 uppercase tracking-widest">↑ Global Leader Tier</div>
                    </div>
                  </Magnetic>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Ticker - Ultra Clean */}
      <div className="py-20 border-y border-border/5 bg-muted/5 backdrop-blur-md overflow-hidden">
        <div className="flex whitespace-nowrap animate-scroll-ticker gap-32">
          {['REACT.JS', 'NEXT.JS', 'TYPESCRIPT', 'NODE.JS', 'FLUTTER', 'AWS', 'DOCKER'].map((name) => (
            <span key={name} className="group/ticker-item text-xl font-black tracking-[0.6em] text-foreground/40 hover:text-primary transition-all duration-500 cursor-default flex items-center gap-4">
              <span className="w-2 h-2 rounded-full bg-primary/20 group-hover/ticker-item:bg-primary transition-colors" />
              {name}
            </span>
          ))}
          {['REACT.JS', 'NEXT.JS', 'TYPESCRIPT', 'NODE.JS', 'FLUTTER', 'AWS', 'DOCKER'].map((name) => (
            <span key={`${name}-cp`} className="group/ticker-item text-xl font-black tracking-[0.6em] text-foreground/40 hover:text-primary transition-all duration-500 cursor-default flex items-center gap-4">
              <span className="w-2 h-2 rounded-full bg-primary/20 group-hover/ticker-item:bg-primary transition-colors" />
              {name}
            </span>
          ))}
        </div>
      </div>
      <SectionDivider />

      {/* Revenue Funnel - The Precision Machine */}
      <section className="py-24 relative bg-muted/2">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-24 items-end mb-32">
            <div className="max-w-3xl">
              <div className="text-primary font-black uppercase tracking-[0.4em] mb-6 text-xs">Innovation Lifecycle</div>
              <ScrollReveal>
                <h2 className="text-2xl lg:text-3xl font-bold leading-tight tracking-tighter mb-8">
                  The Development <span className="text-gradient italic">Lifecycle</span>.
                </h2>
              </ScrollReveal>
              <p className="text-lg text-muted-foreground font-medium max-w-2xl opacity-70">
                From initial concept to global scale, we engineer robust digital architectures that adapt to your business needs and drive innovation.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 items-center">
            <div className="space-y-4">
              {[
                { id: "RESEARCH", title: "Strategic Research", desc: "Understanding market dynamics and user needs before writing a single line of code.", icon: Search },
                { id: "DESIGN", title: "Architectural Design", desc: "Creating scalable, future-proof blueprints for your digital infrastructure.", icon: Layers },
                { id: "DEVELOP", title: "High-Velocity Dev", desc: "Rapid deployment cycles with a focus on code quality and performance.", icon: Code2 },
                { id: "SCALE", title: "Continuous Scale", desc: "Optimizing for growth and global reach through automated scaling.", icon: TrendingUp },
              ].map((item, i) => (
                <SpotlightCard
                  key={i}
                  className={`p-8 group cursor-default transition-all duration-500 ${hoveredStage === item.id ? 'border-primary/50 bg-primary/5' : ''}`}
                  onMouseEnter={() => setHoveredStage(item.id)}
                  onMouseLeave={() => setHoveredStage(null)}
                >
                  <div className="flex items-start gap-8">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-6 shadow-glow ${hoveredStage === item.id ? 'bg-gradient-to-r from-primary to-accent text-white scale-110' : 'bg-primary/10 text-primary'}`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center gap-3">
                        <h3 className={`text-xl font-bold tracking-tight transition-colors ${hoveredStage === item.id ? 'text-primary' : ''}`}>{item.title}</h3>
                        {hoveredStage === item.id && (
                          <motion.div layoutId="active-indicator" className="w-2 h-2 rounded-full bg-primary" />
                        )}
                      </div>
                      <p className="text-muted-foreground font-medium opacity-60 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </div>

            <div className="relative p-8 glass rounded-3xl border border-white/5 overflow-hidden">
              <CircuitBackground />
              <svg viewBox="0 0 400 500" className="w-full h-auto drop-shadow-[0_40px_100px_rgba(var(--primary),0.15)] relative z-10">
                <defs>
                  <linearGradient id="pulse-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="50%" stopColor="oklch(var(--primary))" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>

                <motion.path
                  id="pulse-path"
                  d="M200,20 V480"
                  stroke="none"
                  fill="none"
                />
                <motion.path
                  d="M200,20 V480"
                  stroke="url(#pulse-gradient)"
                  strokeWidth="8"
                  fill="none"
                  style={{ filter: "blur(4px)" }}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: [0, 0.4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                <motion.path
                  d="M200,20 V480"
                  stroke="oklch(var(--primary))"
                  strokeWidth="1.5"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />

                {/* Glowing Dot Follower */}
                <motion.circle
                  r="3"
                  fill="oklch(var(--primary))"
                  style={{ filter: "drop-shadow(0 0 8px oklch(var(--primary)))" }}
                  initial={{ offsetDistance: "0%", opacity: 0 }}
                  animate={{ offsetDistance: "100%", opacity: [0, 1, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <animateMotion path="M200,20 V480" dur="4s" repeatCount="indefinite" />
                </motion.circle>

                {[
                  { id: "RESEARCH", d: "M20,20 L380,20 L340,120 L60,120 Z", label: "RESEARCH", stat: "Phase 01", o: 0.05 },
                  { id: "DESIGN", d: "M60,130 L340,130 L300,230 L100,230 Z", label: "DESIGN", stat: "Phase 02", o: 0.1 },
                  { id: "DEVELOP", d: "M100,240 L300,240 L260,350 L140,350 Z", label: "DEVELOP", stat: "Phase 03", o: 0.3 },
                  { id: "SCALE", d: "M140,360 L260,360 L230,480 L170,480 Z", label: "SCALE", stat: "Phase 04", o: 0.7 },
                ].map((s, i) => (
                  <motion.g
                    key={s.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    onMouseEnter={() => setHoveredStage(s.id)}
                    onMouseLeave={() => setHoveredStage(null)}
                    className="cursor-pointer group/stage"
                  >
                    <path
                      d={s.d}
                      fill="currentColor"
                      className={`transition-all duration-500 ${hoveredStage === s.id ? 'text-primary' : 'text-primary/40'}`}
                      style={{ fillOpacity: hoveredStage === s.id ? 0.4 : s.o }}
                    />
                    <text x="200" y="40" dy={i * 110} textAnchor="middle" className={`text-[10px] font-black tracking-[0.4em] transition-colors duration-500 ${hoveredStage === s.id ? 'fill-primary' : 'fill-foreground/40'}`}>{s.label}</text>
                    <text x="200" y="85" dy={i * 110} textAnchor="middle" className={`text-[28px] font-black tracking-tighter transition-colors duration-500 ${hoveredStage === s.id ? 'fill-foreground' : 'fill-foreground/60'}`}>{s.stat}</text>

                    {/* Micro-labels */}
                    {hoveredStage === s.id && (
                      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <text x="360" y="60" dy={i * 110} className="text-[7px] font-bold fill-primary/60 uppercase tracking-[0.2em]">STATUS: OPTIMAL</text>
                        <text x="40" y="60" dy={i * 110} className="text-[7px] font-bold fill-primary/60 uppercase tracking-[0.2em]">BUFFER: 0ms</text>
                        <circle cx="200" cy="65" dy={i * 110} r="40" className="stroke-primary/20 fill-none" strokeWidth="0.5" strokeDasharray="2 2" />
                      </motion.g>
                    )}
                  </motion.g>
                ))}
              </svg>
              <div className="absolute top-1/2 -right-6 translate-y-[-50%]">
                <Magnetic strength={0.4}>
                  <div className="glass-dark p-6 rounded-2xl border border-primary/30 shadow-2xl backdrop-blur-3xl text-center">
                    <div className="text-3xl font-bold text-primary mb-1">92.4%</div>
                    <div className="text-[9px] font-black uppercase tracking-[0.4em] opacity-40">Sync Rate</div>
                  </div>
                </Magnetic>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SectionDivider />

      {/* Bento Grid - Ultra Premium V3 */}
      <section className="py-24 relative overflow-hidden bg-muted/2">
        {/* Particle Nebula Background */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[180px] animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[180px] animate-pulse-slow animation-delay-2000" />
          <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <filter id="grainy">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" />
            </filter>
            <rect width="100%" height="100%" filter="url(#grainy)" opacity="0.1" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 relative">
            <div className="max-w-2xl relative">
              <div className="absolute -left-12 top-0 w-px h-full bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 hidden lg:block" />
              <ScrollReveal>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-0.5 w-12 bg-primary" />
                  <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">Technical Excellence Hub</span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold leading-[1.1] tracking-tighter mb-6">
                  Unified Engineering <br />
                  <span className="text-gradient italic">Excellence.</span>
                </h2>
              </ScrollReveal>
            </div>
            <Magnetic strength={0.3}>
              <Button variant="link" className="text-foreground/60 hover:text-primary font-black text-lg p-0 group transition-all">
                Explore The Stack <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Magnetic>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[800px]">
            {/* Card 1: Core Engineering Hub (2x2) */}
            <SpotlightCard className="md:col-span-2 md:row-span-2 p-10 flex flex-col justify-between group overflow-hidden border-white/5 bg-background/40 backdrop-blur-[40px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50" />

              {/* Complex Technical Visualization */}
              <div className="absolute -right-20 -top-20 w-[120%] h-[120%] opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-700 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <motion.circle
                    cx="200" cy="200" r="150"
                    className="stroke-primary" strokeWidth="0.5" fill="none"
                    strokeDasharray="4 8"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.circle
                    cx="200" cy="200" r="100"
                    className="stroke-primary" strokeWidth="1" fill="none"
                    strokeDasharray="2 4"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  />
                  <path d="M 50 200 H 350 M 200 50 V 350" className="stroke-primary" strokeWidth="0.2" />
                </svg>
              </div>

              <div className="space-y-10 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="px-5 py-2 rounded-full border border-primary/20 bg-primary/10 text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    Tier-1 Engineering
                  </div>
                  <span className="text-[10px] font-bold opacity-30 tracking-[0.2em] uppercase">Status: Optimal</span>
                </div>

                <ScrollReveal>
                  <h2 className="text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tighter">
                    Precision Built<br />
                    Architectures.
                  </h2>
                </ScrollReveal>

                <div className="grid grid-cols-2 gap-12 pt-8">
                  <div className="space-y-3 p-6 glass rounded-3xl border-primary/10 bg-primary/5 hover:bg-primary/10 transition-colors">
                    <div className="text-4xl font-bold text-primary tracking-tighter">+180%</div>
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">System Velocity</div>
                    <div className="h-1 w-full bg-primary/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        className="h-full bg-primary"
                      />
                    </div>
                  </div>
                  <div className="space-y-3 p-6 glass rounded-3xl border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="text-4xl font-bold tracking-tighter">99.9%</div>
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Node Reliability</div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-12 flex items-center justify-between">
                <Magnetic strength={0.1}>
                  <Button size="lg" className="rounded-full h-16 px-12 font-black uppercase tracking-widest bg-white text-black hover:bg-primary hover:text-white transition-all transform-gpu shadow-2xl shadow-primary/20">
                    Audit Project
                  </Button>
                </Magnetic>
                <div className="flex -space-x-3 opacity-60">
                  <div className="w-8 h-8 rounded-full border border-white/20 bg-primary/20" />
                  <div className="w-8 h-8 rounded-full border border-white/20 bg-accent/20" />
                  <div className="w-8 h-8 rounded-full border border-white/20 bg-muted" />
                </div>
              </div>

              {/* Live Code Ticker */}
              <div className="absolute bottom-0 left-0 w-full h-1 my-6 overflow-hidden flex whitespace-nowrap opacity-[0.05] pointer-events-none">
                <div className="animate-scroll-ticker flex gap-12 font-mono text-[8px] font-black uppercase tracking-tighter">
                  {Array(20).fill("SYSTEM_INIT_0X12A > ARCH_DEPLOYED > VELOCITY_PEAK > OKLCH_SYNC_READY").map((t, idx) => (
                    <span key={idx}>{t}</span>
                  ))}
                </div>
              </div>
            </SpotlightCard>

            {/* Card 2: Creative interfaces (2x1) */}
            <SpotlightCard className="md:col-span-2 p-8 flex items-center justify-between group bg-accent/5 border-white/5 overflow-hidden">
              <div className="max-w-[55%] space-y-6 relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-0.5 bg-accent" />
                  <div className="text-[10px] font-black text-accent uppercase tracking-widest">Kinetic Experience</div>
                </div>
                <ScrollReveal>
                  <h3 className="text-2xl lg:text-3xl font-bold tracking-tighter leading-tight">
                    Emotive & Fluid<br />
                    Visual Systems.
                  </h3>
                </ScrollReveal>
                <div className="p-4 rounded-2xl bg-accent/10 border border-accent/20 w-fit backdrop-blur-md">
                  <span className="text-sm font-black text-accent tracking-tighter uppercase">Visual Delta: +42%</span>
                </div>
              </div>

              {/* Kinetic Orbit Visualization */}
              <div className="w-64 h-64 relative flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-[0.5px] border-accent/20 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8 border-[0.5px] border-accent/40 rounded-full flex items-start justify-center"
                >
                  <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_15px_oklch(var(--accent))]" />
                </motion.div>
                <svg viewBox="0 0 100 100" className="w-full h-full text-accent opacity-60 group-hover:opacity-100 transition-all duration-700">
                  <defs>
                    <linearGradient id="orbit-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="transparent" />
                      <stop offset="50%" stopColor="currentColor" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M10,50 Q25,20 50,50 T90,50"
                    fill="none" stroke="url(#orbit-grad)" strokeWidth="6" strokeLinecap="round"
                    animate={{ d: ["M10,50 Q25,20 50,50 T90,50", "M10,50 Q25,80 50,50 T90,50", "M10,50 Q25,20 50,50 T90,50"] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </svg>
              </div>
            </SpotlightCard>

            {/* Card 3: Marketing (1x1) */}
            <SpotlightCard className="p-6 flex flex-col justify-between group relative overflow-hidden bg-primary/5 border-white/5">
              <div className="flex justify-between items-start relative z-10">
                <div className="text-[10px] font-black text-primary uppercase tracking-widest">Impact Layer</div>
                <div className="flex gap-1 items-center">
                  <span className="text-[8px] font-bold opacity-30">LIVE</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                </div>
              </div>

              <div className="relative z-10 space-y-2">
                <div className="text-3xl font-bold tracking-tighter group-hover:text-primary transition-colors">MARKETING</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-[9px] font-black opacity-30 uppercase tracking-[0.2em]">Scale factor:</span>
                  <span className="text-xl font-bold text-primary">12.4x</span>
                </div>
              </div>

              {/* Pulse Visualization */}
              <div className="absolute inset-x-0 bottom-0 h-24 opacity-20 group-hover:opacity-40 transition-opacity">
                <svg viewBox="0 0 100 40" className="w-full h-full" preserveAspectRatio="none">
                  {Array(15).fill(0).map((_, i) => (
                    <motion.rect
                      key={i}
                      x={i * 7}
                      width="4"
                      initial={{ height: 10 }}
                      animate={{ height: [10, 20 + Math.random() * 20, 10] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                      fill="currentColor"
                      className="text-primary"
                    />
                  ))}
                </svg>
              </div>
            </SpotlightCard>

            {/* Card 4: DevOps (1x1) */}
            <SpotlightCard className="p-6 flex flex-col justify-between group bg-muted/10 border-white/5 transition-all hover:bg-muted/20">
              <div className="flex justify-between items-start relative z-10">
                <div className="text-[10px] font-black text-foreground uppercase tracking-widest">Network Edge</div>
                <div className="flex gap-1.5">
                  <div className="w-3 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                  <div className="w-1 h-1 rounded-full bg-primary/20" />
                </div>
              </div>

              <div className="relative z-10">
                <div className="text-3xl font-bold mb-1 tracking-tighter group-hover:text-primary transition-colors">DEVOPS</div>
                <div className="flex items-center gap-2">
                  <div className="px-2 py-0.5 rounded-md bg-green-500/10 border border-green-500/20 text-[7px] font-black text-green-500 uppercase tracking-widest">SECURE_LINK</div>
                  <span className="text-[8px] font-bold opacity-30 tracking-widest">0.02ms</span>
                </div>
              </div>

              {/* Radar Sweep Visualization */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <motion.line
                    x1="50" y1="50" x2="50" y2="5"
                    stroke="currentColor" strokeWidth="1"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "50% 50%" }}
                  />
                </svg>
              </div>

              <div className="flex justify-between items-end relative z-10">
                <div className="text-[8px] font-black opacity-30 tracking-[0.4em] uppercase">Cloud Native Stack</div>
                <div className="text-xl font-bold opacity-30 group-hover:opacity-100 transition-opacity tracking-tighter">VPC-01</div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>
      <SectionDivider />

      {/* Expertise */}
      <section className="py-24 relative overflow-hidden bg-muted/2">
        <DecorativeGrid />
        <CircuitBackground />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-20 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-8">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`aspect-[4/5] rounded-2xl overflow-hidden border-2 border-border/10 shadow-2xl transition-all ${i % 2 === 0 ? 'mt-12' : ''}`}
                  >
                    <img src={`https://i.pravatar.cc/500?img=${i + 60}`} alt="Team" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                  </motion.div>
                ))}
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Magnetic strength={0.4}>
                  <div className="glass p-8 rounded-full border border-primary/20 shadow-[0_0_80px_rgba(var(--primary),0.2)] text-center backdrop-blur-3xl">
                    <div className="text-4xl font-bold text-gradient tracking-tighter">10Y+</div>
                    <div className="text-[9px] font-black uppercase tracking-[0.4em] opacity-40 whitespace-nowrap">Market Veteran Era</div>
                  </div>
                </Magnetic>
              </div>
            </div>

            <div className="flex flex-col space-y-14">
              <div className="space-y-6">
                <div className="text-primary font-black uppercase tracking-[0.4em] text-xs">Technical Mastery</div>
                <ScrollReveal>
                  <h2 className="text-2xl lg:text-3xl font-bold leading-tight tracking-tighter">Technical <span className="text-gradient">Excellence.</span></h2>
                </ScrollReveal>
                <p className="text-lg text-muted-foreground font-medium opacity-70 leading-relaxed border-l-2 border-primary/30 pl-10 py-4 max-w-2xl">
                  We aren't just a service provider. We're a specialized engineering unit that transforms complex business requirements into high-performance digital ecosystems.
                </p>
              </div>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
                className="grid gap-6"
              >
                {[
                  "Full-Stack mastery across modern frameworks",
                  "Cross-platform execution for mobile & web",
                  "Performance-engineered digital assets",
                  "24/7 managed infrastructure & support"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      show: { opacity: 1, x: 0 }
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex items-center gap-6 group cursor-default"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-bold opacity-40 group-hover:opacity-100 transition-opacity uppercase tracking-tighter">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <SectionDivider />

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SpotlightCard className="p-12 lg:p-24 text-center relative overflow-hidden flex flex-col items-center">
            <div className="absolute inset-0 bg-primary/5 blur-[120px] -z-10" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="space-y-8 max-w-4xl"
            >
              <ScrollReveal>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tighter leading-tight mb-8">
                  Ready to Build Your <span className="text-gradient italic">Digital Legacy</span>?
                </h2>
              </ScrollReveal>
              <p className="text-xl text-muted-foreground font-medium opacity-60 mb-20 max-w-2xl mx-auto">
                Start your project today with a Tier-1 engineering team.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 w-full max-w-3xl glass p-3 rounded-3xl border border-white/10 shadow-3xl">
                <input
                  type="email"
                  placeholder="CEO@YOURCOMPANY.COM"
                  className="flex-1 px-12 h-20 rounded-full bg-transparent border-none focus:outline-none text-xl font-bold uppercase tracking-widest placeholder:opacity-20"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Magnetic strength={0.1}>
                  <Button className="h-20 px-20 rounded-full text-xl font-bold uppercase tracking-widest bg-gradient-to-r from-primary via-accent to-primary animate-gradient-xy hover:scale-[1.02] active:scale-95 transition-all shadow-glow">
                    Let's Build It
                  </Button>
                </Magnetic>
              </div>
              <div className="flex justify-center items-center gap-12 pt-12 opacity-30">
                <div className="flex items-center gap-3">
                  <Shield className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">SECURE & CONFIDENTIAL</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">ZERO UPFRONT COST</span>
                </div>
              </div>
            </motion.div>
          </SpotlightCard>
        </div>
      </section>
      <SectionDivider />
    </div>
  );
}
