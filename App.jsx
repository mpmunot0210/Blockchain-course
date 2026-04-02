import { useState, useEffect, useMemo } from "react";
import { getCourseDataWithLectures } from "./mergeData.js";
import "./app.css";

/* ─── Icons ─── */
const Icon = ({ d, size = 16, stroke = "currentColor", fill = "none" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill={fill} stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={d}/></svg>
);
const ChevronDown = () => <Icon d="M4 6l4 4 4-4" />;
const ChevronRight = () => <Icon d="M6 4l4 4-4 4" />;
const ArrowLeft = () => <Icon d="M10 3L5 8l5 5" />;
const BookOpen = () => <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h4.5a2 2 0 012 2v9a1.5 1.5 0 00-1.5-1.5H2V3z"/><path d="M14 3H9.5a2 2 0 00-2 2v9a1.5 1.5 0 011.5-1.5H14V3z"/></svg>;
const Clock = () => <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="8" r="6"/><path d="M8 5v3l2.5 1.5"/></svg>;
const Check = ({ color = "var(--c-green)" }) => <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="8" r="6"/><path d="M5.5 8l2 2 3.5-3.5"/></svg>;
const Pen = () => <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11.5 1.5l3 3L5 14H2v-3L11.5 1.5z"/></svg>;
const Play = () => <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="5,3 13,8 5,13" fill="currentColor" stroke="none"/></svg>;
const ExternalLink = () => <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9v4a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1h4"/><path d="M9 2h5v5"/><path d="M14 2L6.5 9.5"/></svg>;

/* ─── Helpers ─── */
const COLOR_MAP = {
  green: { main: "var(--c-green)", light: "var(--c-green-light)", mid: "var(--c-green-mid)" },
  blue: { main: "var(--c-blue)", light: "var(--c-blue-light)" },
  plum: { main: "var(--c-plum)", light: "var(--c-plum-light)" },
  olive: { main: "var(--c-olive)", light: "var(--c-olive-light)" },
};
const getColor = (v) => COLOR_MAP[v] || COLOR_MAP.green;

function ProgressBar({ value, color = "var(--c-green)", height = 3 }) {
  return (
    <div style={{ height, background: "var(--c-border)", borderRadius: 2, overflow: "hidden" }}>
      <div style={{ width: `${value}%`, height: "100%", background: color, borderRadius: 2, transition: "width 0.5s cubic-bezier(0.4,0,0.2,1)" }}/>
    </div>
  );
}

/* ─── Quiz Component ─── */
function Quiz({ questions, color, onComplete }) {
  const [idx, setIdx] = useState(0);
  const [pick, setPick] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [log, setLog] = useState([]);
  const [done, setDone] = useState(false);

  const q = questions[idx];

  const submit = () => { if (pick === null) return; const ok = pick === q.answer; if (ok) setScore(s => s + 1); setLog(l => [...l, { ok, pick, ans: q.answer }]); setRevealed(true); };
  const next = () => { if (idx < questions.length - 1) { setIdx(i => i + 1); setPick(null); setRevealed(false); } else { setDone(true); } };

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    const pass = pct >= 80;
    return (
      <div style={{ animation: "fadeIn 0.3s ease" }}>
        <div style={{ textAlign: "center", padding: "2rem 0" }}>
          <div style={{ fontSize: 56, fontWeight: 300, color: pass ? "var(--c-green)" : "var(--c-red)", marginBottom: 4 }}>{pct}%</div>
          <div style={{ fontSize: 15, color: "var(--c-text-muted)", marginBottom: 8 }}>{score} of {questions.length} correct</div>
          <span style={{ fontSize: 13, fontWeight: 500, color: pass ? "var(--c-green)" : "var(--c-red)", background: pass ? "var(--c-green-light)" : "var(--c-red-light)", padding: "5px 16px", borderRadius: 20 }}>
            {pass ? "Passed — strong mastery" : "Below 80% — review recommended"}
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6, margin: "1.5rem 0" }}>
          {questions.map((qq, i) => (
            <div key={i} style={{ display: "flex", gap: 10, padding: "10px 14px", background: log[i].ok ? "var(--c-green-light)" : "var(--c-red-light)", borderRadius: 8, fontSize: 13, alignItems: "flex-start" }}>
              <span style={{ fontWeight: 600, color: log[i].ok ? "var(--c-green)" : "var(--c-red)", minWidth: 18 }}>{log[i].ok ? "✓" : "✗"}</span>
              <div>
                <span style={{ color: "var(--c-text)" }}>Q{i + 1}: {qq.q.length > 90 ? qq.q.slice(0, 90) + "…" : qq.q}</span>
                {!log[i].ok && qq.explanation && <p style={{ fontSize: 12, color: "var(--c-text-muted)", margin: "4px 0 0", lineHeight: 1.5 }}>{qq.explanation}</p>}
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => onComplete(score)} className="btn-primary" style={{ background: color }}>Continue to next module</button>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <span style={{ fontSize: 13, color: "var(--c-text-muted)" }}>Question {idx + 1} of {questions.length}</span>
        <span style={{ fontSize: 13, fontWeight: 500, color }}>Score: {score}</span>
      </div>
      <ProgressBar value={((idx + (revealed ? 1 : 0)) / questions.length) * 100} color={color} height={4}/>
      <p style={{ margin: "24px 0 20px", fontSize: 15, fontWeight: 500, lineHeight: 1.65 }}>{q.q}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {q.options.map((opt, i) => {
          let bg = "var(--c-surface)", border = "var(--c-border)", fg = "var(--c-text)";
          if (revealed && i === q.answer) { bg = "var(--c-green-light)"; border = "var(--c-green)"; fg = "var(--c-green)"; }
          else if (revealed && i === pick) { bg = "var(--c-red-light)"; border = "var(--c-red)"; fg = "var(--c-red)"; }
          else if (!revealed && i === pick) { border = color; }
          return (
            <div key={i} onClick={() => !revealed && setPick(i)} style={{ padding: "12px 16px", background: bg, border: `1px solid ${border}`, borderRadius: 8, cursor: revealed ? "default" : "pointer", fontSize: 14, lineHeight: 1.55, color: fg, transition: "all 0.15s" }}>
              <span style={{ fontWeight: 500, marginRight: 10, opacity: 0.4 }}>{String.fromCharCode(65 + i)}</span>{opt}
            </div>
          );
        })}
      </div>
      {revealed && q.explanation && (
        <div style={{ margin: "16px 0", padding: "12px 16px", background: "var(--c-green-light)", borderRadius: 8, fontSize: 13, lineHeight: 1.6, color: "var(--c-text)" }}>
          <span style={{ fontWeight: 500 }}>Explanation: </span>{q.explanation}
        </div>
      )}
      <div style={{ marginTop: 20 }}>
        {!revealed
          ? <button onClick={submit} disabled={pick === null} className="btn-primary" style={{ background: pick !== null ? color : "var(--c-border)", cursor: pick !== null ? "pointer" : "default" }}>Check answer</button>
          : <button onClick={next} className="btn-primary" style={{ background: color }}>{idx < questions.length - 1 ? "Next question" : "See results"}</button>
        }
      </div>
    </div>
  );
}

/* ─── Module Detail View ─── */
function ModuleView({ mod, week, onBack, completed, onMarkComplete }) {
  const [tab, setTab] = useState("lesson");
  const c = getColor(week.colorVar);

  const tabs = [
    { id: "lesson", label: "Lesson" },
    { id: "case", label: "Case study" },
    { id: "readings", label: "Readings" },
  ];
  if (mod.assessment) tabs.push({ id: "assessment", label: "Assessment" });

  return (
    <div style={{ animation: "slideIn 0.25s ease" }}>
      <button onClick={onBack} className="btn-ghost" style={{ marginBottom: 16 }}><ArrowLeft /> Back to syllabus</button>

      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
        <span className="badge" style={{ color: c.main, background: c.light }}>{mod.id}</span>
        {completed && <Check />}
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 500, margin: "0 0 4px" }}>{mod.title}</h2>
      <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--c-text-muted)", marginBottom: 8 }}>
        <Clock /> {mod.time}
      </div>
      {mod.overview && <p style={{ fontSize: 14, color: "var(--c-text-muted)", lineHeight: 1.65, margin: "0 0 24px" }}>{mod.overview}</p>}

      {/* Tabs */}
      <div style={{ display: "flex", gap: 0, borderBottom: "1px solid var(--c-border)", marginBottom: 24, overflowX: "auto" }}>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "10px 18px", background: "none", border: "none", borderBottom: tab === t.id ? `2px solid ${c.main}` : "2px solid transparent", color: tab === t.id ? c.main : "var(--c-text-muted)", fontSize: 13, fontWeight: 500, cursor: "pointer", whiteSpace: "nowrap" }}>{t.label}</button>
        ))}
      </div>

      {/* Lesson Tab */}
      {tab === "lesson" && (
        <div>
          <h3 style={{ fontSize: 15, fontWeight: 500, color: c.main, marginBottom: 16 }}>Topics covered</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
            {mod.topics.map((t, i) => (
              <div key={i} style={{ display: "flex", gap: 12, fontSize: 14, lineHeight: 1.55 }}>
                <span style={{ color: c.main, fontWeight: 600, fontSize: 12, minWidth: 22, marginTop: 2, fontFamily: "var(--font-mono)" }}>{String(i + 1).padStart(2, "0")}</span>
                <span>{t}</span>
              </div>
            ))}
          </div>

          {mod.keyFramework && (
            <div style={{ padding: "20px 24px", background: c.light, borderRadius: 10, marginBottom: 28 }}>
              <h4 style={{ fontSize: 13, fontWeight: 600, color: c.main, margin: "0 0 14px", letterSpacing: 0.3, textTransform: "uppercase" }}>{mod.keyFramework.title}</h4>
              {mod.keyFramework.rows.map((r, i) => (
                <div key={i} style={{ display: "flex", gap: 16, marginBottom: i < mod.keyFramework.rows.length - 1 ? 10 : 0, fontSize: 13 }}>
                  <span style={{ fontWeight: 600, color: c.main, minWidth: 160, flexShrink: 0 }}>{r.label}</span>
                  <span style={{ color: "var(--c-text)" }}>{r.value}</span>
                </div>
              ))}
            </div>
          )}

          {mod.lectureContent && mod.lectureContent.length > 0 && (
            <div style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: 15, fontWeight: 500, color: c.main, marginBottom: 16 }}>Lecture content</h3>
              {mod.lectureContent.map((section, i) => (
                <div key={i} style={{ marginBottom: 24 }}>
                  <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 8, color: "var(--c-text)" }}>{section.heading}</h4>
                  {section.body.split("\n\n").map((para, j) => (
                    <p key={j} style={{ fontSize: 14, lineHeight: 1.75, color: "var(--c-text)", marginBottom: 10 }}>{para}</p>
                  ))}
                </div>
              ))}
            </div>
          )}

          {!completed && (
            <button onClick={() => onMarkComplete(mod.id)} className="btn-primary" style={{ background: c.main }}>
              <Play /> Mark lesson as complete
            </button>
          )}
        </div>
      )}

      {/* Case Study Tab */}
      {tab === "case" && mod.caseStudy && (
        <div>
          <h3 style={{ fontSize: 17, fontWeight: 500, color: c.main, marginBottom: 16 }}>{mod.caseStudy.title}</h3>
          {mod.caseStudy.sections.map((s, i) => (
            <div key={i} style={{ marginBottom: 20 }}>
              <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>{s.heading}</h4>
              {s.body.split("\n\n").map((p, j) => (
                <p key={j} style={{ fontSize: 14, lineHeight: 1.75, marginBottom: 8 }}>{p}</p>
              ))}
            </div>
          ))}
          {mod.caseStudy.discussionQuestions && (
            <div style={{ padding: "16px 20px", background: c.light, borderRadius: 10, marginTop: 20 }}>
              <h4 style={{ fontSize: 13, fontWeight: 600, color: c.main, margin: "0 0 12px" }}>Discussion questions</h4>
              {mod.caseStudy.discussionQuestions.map((dq, i) => (
                <p key={i} style={{ fontSize: 13, lineHeight: 1.6, marginBottom: 8, color: "var(--c-text)" }}>{i + 1}. {dq}</p>
              ))}
            </div>
          )}
        </div>
      )}
      {tab === "case" && !mod.caseStudy && (
        <p style={{ fontSize: 14, color: "var(--c-text-muted)" }}>No case study for this section. Proceed to the assessment tab.</p>
      )}

      {/* Readings Tab */}
      {tab === "readings" && (
        <div>
          <h3 style={{ fontSize: 15, fontWeight: 500, color: c.main, marginBottom: 16 }}>Recommended readings</h3>
          {mod.readings && mod.readings.length > 0 ? mod.readings.map((r, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, fontSize: 14 }}>
              <BookOpen />
              {r.url ? <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ color: c.main, borderBottom: `1px solid ${c.light}` }}>{r.title} <ExternalLink /></a> : <span>{r.title}</span>}
            </div>
          )) : <p style={{ fontSize: 14, color: "var(--c-text-muted)" }}>No specific readings for this section.</p>}
        </div>
      )}

      {/* Assessment Tab */}
      {tab === "assessment" && mod.assessment && (
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <Pen />
            <h3 style={{ fontSize: 16, fontWeight: 500, margin: 0, color: c.main }}>{mod.assessment.title}</h3>
          </div>
          {mod.assessment.type === "quiz" && mod.assessment.questions ? (
            <Quiz questions={mod.assessment.questions} color={c.main} onComplete={(score) => onMarkComplete(mod.id)} />
          ) : (
            <div>
              <div style={{ padding: "20px 24px", background: c.light, borderRadius: 10, marginBottom: 20 }}>
                <p style={{ fontSize: 14, lineHeight: 1.75, margin: 0 }}>{mod.assessment.description}</p>
              </div>
              <p style={{ fontSize: 13, color: "var(--c-text-muted)", marginBottom: 16, lineHeight: 1.6 }}>
                To complete this assessment, draft your response and share it in the Claude chat for detailed professor-grade feedback and scoring.
              </p>
              <button onClick={() => onMarkComplete(mod.id)} className="btn-primary" style={{ background: c.main }}>
                <Pen /> Mark assessment as complete
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ─── Syllabus View ─── */
function SyllabusView({ courseData, onOpenModule, completedModules }) {
  const [expanded, setExpanded] = useState({ 1: true, 2: false, 3: false, 4: false });
  const toggle = (id) => setExpanded(e => ({ ...e, [id]: !e[id] }));

  const totalMods = courseData.weeks.reduce((s, w) => s + w.modules.length, 0);
  const doneMods = completedModules.length;
  const pct = Math.round((doneMods / totalMods) * 100);

  return (
    <div style={{ animation: "fadeIn 0.3s ease" }}>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, color: "var(--c-text-hint)", margin: "0 0 8px", textTransform: "uppercase" }}>MIT Sloan–caliber curriculum</p>
        <h1 style={{ fontSize: 28, fontWeight: 500, margin: "0 0 8px", lineHeight: 1.3 }}>Blockchain technologies:<br/>business innovation & application</h1>
        <p style={{ fontSize: 14, color: "var(--c-text-muted)", margin: "0 0 20px" }}>{courseData.meta}</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 10, marginBottom: 16 }}>
          {[
            { l: "Total hours", v: "~44 hrs" },
            { l: "Progress", v: `${pct}%` },
            { l: "Completed", v: `${doneMods}/${totalMods}` },
            { l: "Assessments", v: "7" },
          ].map((s, i) => (
            <div key={i} style={{ background: "var(--c-surface)", borderRadius: 8, padding: "12px 14px", border: "1px solid var(--c-border)" }}>
              <div style={{ fontSize: 11, color: "var(--c-text-hint)", marginBottom: 2 }}>{s.l}</div>
              <div style={{ fontSize: 20, fontWeight: 500 }}>{s.v}</div>
            </div>
          ))}
        </div>
        <ProgressBar value={pct} color="var(--c-green)" height={4}/>
      </div>

      {/* Weeks */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {courseData.weeks.map(week => {
          const c = getColor(week.colorVar);
          const wDone = week.modules.filter(m => completedModules.includes(m.id)).length;
          const open = expanded[week.id];
          return (
            <div key={week.id} style={{ border: "1px solid var(--c-border)", borderRadius: 10, overflow: "hidden", transition: "all 0.2s" }}>
              <div onClick={() => toggle(week.id)} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 20px", cursor: "pointer", background: open ? c.light : "transparent", transition: "background 0.2s" }}>
                <span style={{ color: c.main, transition: "transform 0.2s", transform: open ? "rotate(0)" : "rotate(-90deg)", flexShrink: 0 }}><ChevronDown /></span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                    <span className="badge" style={{ color: c.main, background: open ? "var(--c-surface)" : c.light }}>{week.id <= 3 ? `Week ${week.id}` : "Bonus"}</span>
                    <span style={{ fontSize: 15, fontWeight: 500 }}>{week.title}</span>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "var(--c-text-hint)", flexShrink: 0 }}>
                  <span>{wDone}/{week.modules.length}</span>
                  <Clock /> <span>{week.hours}</span>
                </div>
              </div>
              {open && (
                <div style={{ padding: "4px 20px 16px" }}>
                  <p style={{ fontSize: 13, color: "var(--c-text-muted)", margin: "6px 0 14px", lineHeight: 1.55 }}>{week.theme}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {week.modules.map(mod => {
                      const isDone = completedModules.includes(mod.id);
                      return (
                        <div key={mod.id} onClick={() => onOpenModule(mod, week)} className="module-row" style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: 8, cursor: "pointer" }}>
                          <span className="badge" style={{ color: c.main, background: c.light, flexShrink: 0 }}>{mod.id}</span>
                          <span style={{ fontSize: 14, fontWeight: 450, flex: 1 }}>{mod.title}</span>
                          {isDone && <Check />}
                          <span style={{ fontSize: 12, color: "var(--c-text-hint)", flexShrink: 0 }}>{mod.time}</span>
                          <span style={{ color: "var(--c-border-hover)" }}><ChevronRight /></span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Help box */}
      <div style={{ marginTop: 24, padding: "16px 20px", background: "var(--c-green-light)", borderRadius: 10, border: `1px solid var(--c-green-mid)` }}>
        <p style={{ fontSize: 14, fontWeight: 500, color: "var(--c-green)", margin: "0 0 6px" }}>How to use this course</p>
        <p style={{ fontSize: 13, color: "var(--c-text)", margin: 0, lineHeight: 1.65, opacity: 0.8 }}>
          Click any module to view its full syllabus, case study, readings, and assessment. Each module includes lecture content you can study directly, plus interactive quizzes. For deeper discussion, open this alongside your Claude chat and ask questions as you go. Your progress is saved locally in your browser.
        </p>
      </div>
    </div>
  );
}

/* ─── App Shell ─── */
export default function App() {
  const courseData = useMemo(() => getCourseDataWithLectures(), []);
  const [view, setView] = useState("syllabus");
  const [activeMod, setActiveMod] = useState(null);
  const [activeWeek, setActiveWeek] = useState(null);
  const [completed, setCompleted] = useState(() => {
    try { return JSON.parse(localStorage.getItem("bc_progress") || "[]"); } catch { return []; }
  });

  useEffect(() => {
    try { localStorage.setItem("bc_progress", JSON.stringify(completed)); } catch {}
  }, [completed]);

  const markComplete = (id) => {
    if (!completed.includes(id)) setCompleted(c => [...c, id]);
  };

  const openModule = (mod, week) => { setActiveMod(mod); setActiveWeek(week); setView("module"); window.scrollTo(0, 0); };
  const goBack = () => { setView("syllabus"); window.scrollTo(0, 0); };

  return (
    <div className="app-shell">
      {view === "syllabus" && (
        <SyllabusView courseData={courseData} onOpenModule={openModule} completedModules={completed} />
      )}
      {view === "module" && activeMod && activeWeek && (
        <ModuleView mod={activeMod} week={activeWeek} onBack={goBack} completed={completed.includes(activeMod.id)} onMarkComplete={markComplete} />
      )}
    </div>
  );
}
