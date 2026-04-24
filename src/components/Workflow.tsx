import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Users,
  Layout,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface StatItem {
  value: string;
  label: string;
}

interface PointItem {
  subtitle: string;
  text: string;
  progress?: number; // 0–100, optional progress bar
}

interface StepItem {
  subtitle: string;
  text: string;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

const CellIcon: React.FC<{ icon: React.ElementType; color?: string }> = ({
  icon: Icon,
  color = "text-foreground"
}) => (
  <div className={`p-2.5 rounded-xl border inline-flex mb-4 w-fit bg-current/10 ${color.replace('text-', 'border-')}/20`}>
    <Icon size={20} className={color} />
  </div>
);

const StatRow: React.FC<{ stats: StatItem[]; color?: string }> = ({ stats, color = "text-foreground" }) => (
  <div className="grid grid-cols-3 gap-2 mb-5">
    {stats.map((s) => (
      <div
        key={s.label}
        className={`rounded-xl px-3 py-2.5 text-center bg-current/5 border border-current/10 `}
      >
        <div className="text-xl font-bold leading-none mb-1">
          {s.value}
        </div>
        <div className="text-[10px] opacity-60 leading-tight">
          {s.label}
        </div>
      </div>
    ))}
  </div>
);

const ProgressPoint: React.FC<{ point: PointItem; color?: string; bgColor?: string }> = ({
  point,
  color = "text-foreground",
  bgColor = "bg-foreground/60"
}) => (
  <div className="bg-foreground/5 rounded-xl px-4 py-3 mb-2.5 last:mb-0 border border-foreground/5">
    <div className="flex justify-between items-center mb-1.5">
      <span className="text-sm font-semibold text-foreground">
        {point.subtitle}
      </span>
      {point.progress !== undefined && (
        <span className="text-xs text-foreground/40">{point.progress}%</span>
      )}
    </div>
    {point.progress !== undefined && (
      <div className="h-1 rounded-full bg-foreground/10 mb-2">
        <motion.div
          className={`h-full rounded-full ${bgColor}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${point.progress}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        />
      </div>
    )}
    <p className="text-xs text-foreground/60 leading-relaxed">{point.text}</p>
  </div>
);

const StepList: React.FC<{ steps: StepItem[]; color?: string }> = ({ steps, color = "text-foreground" }) => (
  <div className="flex flex-col gap-0">
    {steps.map((step, i) => (
      <div key={step.subtitle} className="flex gap-3 relative pb-4 last:pb-0">
        {/* connector line */}
        {i < steps.length - 1 && (
          <div className="absolute left-[11px] top-5 bottom-0 w-px bg-foreground/10" />
        )}
        {/* step number */}
        <div className={`w-[22px] h-[22px] rounded-full border flex items-center justify-center flex-shrink-0 z-10 bg-current/5 border-current/20 ${color}`}>
          <span className="text-[10px] font-semibold">
            {i + 1}
          </span>
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground mb-0.5">
            {step.subtitle}
          </div>
          <div className="text-xs text-foreground/60 leading-relaxed">
            {step.text}
          </div>
        </div>
      </div>
    ))}
  </div>
);

const BulletPoint: React.FC<{ point: PointItem; color?: string }> = ({ point, color = "text-foreground" }) => (
  <div className="flex gap-3 mb-3.5 last:mb-0">
    <CheckCircle2 size={15} className={`mt-0.5 flex-shrink-0 ${color}`} />
    <div>
      <div className="text-sm font-semibold text-foreground mb-0.5">
        {point.subtitle}
      </div>
      <div className="text-xs text-foreground/60 leading-relaxed">
        {point.text}
      </div>
    </div>
  </div>
);

const PillTag: React.FC<{ label: string; color?: string }> = ({ label, color = "text-foreground" }) => (
  <span className={`text-[11px] font-medium px-3 py-1 rounded-full border bg-current/5 border-current/10 ${color}`}>
    {label}
  </span>
);

// ─── Main Component ────────────────────────────────────────────────────────────

const Workflow: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'start 0.3'],
  });

  const highlightWidth = useTransform(
    scrollYProgress,
    [0, 1],
    ['0% 100%', '100% 100%']
  );

  const fadeVariant = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' },
    }),
  };

  return (
    <section id="workflow" className="py-14 lg:py-16 bg-background px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="container mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 mt-4 sm:mt-8"
            >
              Workflow{' '}
              <span className="text-foreground/60  text-orange-300">Insights</span>
            </motion.h2>

            <div ref={containerRef}>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-base sm:text-xl md:text-2xl font-medium leading-[1.6] relative"
              >
                <motion.span
                  style={{
                    backgroundColor: 'transparent',
                    backgroundImage:
                      'linear-gradient(90deg, rgba(0,0,0,0.2) 0%, rgba(242, 181, 15, 0.24) 100%)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: highlightWidth,
                    padding: '0.1em 0',
                    margin: '0 -0.1em',
                    borderRadius: '0.2rem',
                  }}
                >
                  Our methodology is built on

                  collaboration, quality, and scalability.
                </motion.span>
              </motion.p>
            </div>
          </div>
        </div>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 rounded-3xl">

          {/* ─── Cell 1: Collaboration — wide (7 cols, row 1) ─── */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeVariant}
            className="glass-card rounded-3xl p-5 sm:p-7 flex flex-col border-blue-500/10 hover:border-blue-500/20 sm:col-span-2 lg:col-span-7"
          >
            <CellIcon icon={Users} color="text-blue-400" />
            <h3 className="text-2xl font-bold mb-1 ">
              Collaboration &amp; Communication
            </h3>
            <p className="text-xs text-foreground/50 mb-5 font-medium">
              Diverse teams aligned toward a single goal.
            </p>

            <StatRow
              stats={[
                { value: '3+', label: 'Cross-functional teams' },
                { value: '∞', label: 'Feedback loops' },
                { value: 'RT', label: 'Real-time tracking' },
              ]}
              color="text-blue-400"
            />

            <div className="flex-1 space-y-0">
              <BulletPoint
                point={{
                  subtitle: 'Cross-Functional Teams',
                  text: 'Developers, designers, and QA engineers collaborating to align with business needs.',
                }}
                color="text-blue-400"
              />
              <BulletPoint
                point={{
                  subtitle: 'Stakeholder Involvement',
                  text: 'Continuous feedback loops with customers and business owners throughout the development cycle.',
                }}
                color="text-blue-400"
              />
              <BulletPoint
                point={{
                  subtitle: 'Integrated Tools',
                  text: 'Slack, Jira, and Confluence for real-time communication and progress tracking.',
                }}
                color="text-blue-400"
              />
            </div>

            <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-foreground/8">
              <PillTag label="Slack" />
              <PillTag label="Jira" />
              <PillTag label="Confluence" />
            </div>
          </motion.div>

          {/* ─── Cell 2: Design — (5 cols, row 1) ─── */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeVariant}
            className="glass-card rounded-3xl p-5 sm:p-7 flex flex-col border-purple-500/10 hover:border-purple-500/20 sm:col-span-2 lg:col-span-5"
          >
            <CellIcon icon={Layout} color="text-purple-400" />
            <h3 className="text-2xl font-bold mb-1 ">
              User-Centered Design
            </h3>
            <p className="text-xs text-foreground/50 mb-5 font-medium">
              Design that starts and ends with the user.
            </p>

            <div className="flex-1">
              <StepList
                steps={[
                  {
                    subtitle: 'Research & Discovery',
                    text: 'User research and personas guiding every product design decision.',
                  },
                  {
                    subtitle: 'Prototyping & Testing',
                    text: 'Iterative approach with real user testing integrated into future versions.',
                  },
                  {
                    subtitle: 'Usability Focus',
                    text: 'Creating intuitive interfaces that significantly improve user satisfaction.',
                  },
                ]}
                color="text-purple-400"
              />
            </div>
          </motion.div>

          {/* ─── Cell 3: QA — (5 cols, row 2) ─── */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeVariant}
            className="glass-card rounded-3xl p-5 sm:p-7 flex flex-col border-emerald-500/10 hover:border-emerald-500/20 sm:col-span-1 lg:col-span-5"
          >
            <CellIcon icon={ShieldCheck} color="text-emerald-400" />
            <h3 className="text-2xl font-bold mb-1 ">Quality Assurance</h3>
            <p className="text-xs text-foreground/50 mb-5 font-medium">
              Code you can trust at every release.
            </p>

            <div className="flex-1">
              <ProgressPoint
                point={{
                  subtitle: 'Test-Driven Development',
                  text: 'Writing comprehensive tests before implementation ensures code reliability.',
                  progress: 85,
                }}
                color="text-emerald-400"
                bgColor="bg-emerald-400"
              />
              <ProgressPoint
                point={{
                  subtitle: 'Automated CI/CD',
                  text: 'Continuous integration and delivery pipelines for stable, error-free releases.',
                  progress: 92,
                }}
                color="text-emerald-400"
                bgColor="bg-emerald-400"
              />
              <ProgressPoint
                point={{
                  subtitle: 'Code Reviews',
                  text: 'Peer reviews and pair programming maintain high code quality and knowledge sharing.',
                  progress: 78,
                }}
                color="text-emerald-400"
                bgColor="bg-emerald-400"
              />
            </div>
          </motion.div>

          {/* ─── Cell 4: TDD Badge — small (3 cols, row 2) ─── */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeVariant}
            className="glass-card rounded-3xl p-5 sm:p-7 flex flex-col items-center justify-center text-center border-amber-500/10 hover:border-amber-500/20 sm:col-span-1 lg:col-span-3"
          >
            <div className="text-5xl font-bold leading-none mb-2">
              TDD
            </div>
            <div className="text-xs  mb-6 font-medium tracking-widest uppercase">
              Test-Driven
            </div>

            <div className="w-full border-t border-foreground/8 pt-5 ">
              <div className="text-[10px] opacity-60 uppercase tracking-widest mb-1">
                Coverage target
              </div>
              <div className="text-3xl font-bold ">90%+</div>
            </div>

            <div className="w-full border-t border-foreground/8 mt-5 pt-5 ">
              <div className="text-[10px] opacity-60 uppercase tracking-widest mb-1">
                Release cadence
              </div>
              <div className="text-xl font-bold">2 wks</div>
            </div>
          </motion.div>

          {/* ─── Cell 5: Scalability — (4 cols, row 2) ─── */}
          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeVariant}
            className="glass-card rounded-3xl p-5 sm:p-7 flex flex-col border-teal-500/10 hover:border-teal-500/20 sm:col-span-2 lg:col-span-4"
          >
            <CellIcon icon={TrendingUp} color="text-teal-400" />
            <h3 className="text-2xl font-bold mb-1">
              Scalability &amp; Performance
            </h3>
            <p className="text-xs text-foreground/50 mb-5 font-medium">
              Built to grow without breaking.
            </p>

            <div className="flex-1 space-y-0">
              <BulletPoint
                point={{
                  subtitle: 'Scalable Architecture',
                  text: 'Cloud-native microservices designed to grow with your user base.',
                }}
                color="text-teal-400"
              />
              <BulletPoint
                point={{
                  subtitle: 'Performance Monitoring',
                  text: 'New Relic and Prometheus continuously identify and resolve bottlenecks.',
                }}
                color="text-teal-400"
              />
              <BulletPoint
                point={{
                  subtitle: 'Compliance & Security',
                  text: 'Meeting GDPR and HIPAA standards to ensure total user data protection.',
                }}
                color="text-teal-400"
              />
            </div>

            <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-foreground/8">
              <PillTag label="GDPR" />
              <PillTag label="HIPAA" />
              <PillTag label="New Relic" />
              <PillTag label="Prometheus" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Workflow;