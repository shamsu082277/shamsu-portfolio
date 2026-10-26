# AI Prompts and Results

For each meaningful prompt, record:
- Date
- Tool used
- Task
- Prompt
- Files changed
- Result
- Errors and fixes

---

### Prompt 1: Reference Benchmarking & Design Decisions Specification
- **Date**: 2026-10-26
- **Tool Used**: `search_web`, `read_file`, `write_file`, `run_command`
- **Task**: Inspect 6 portfolio references, compare Manav Portfolio Lab and Cyntax, define a cohesive original design direction, propose homepage structure and design system, and document findings.
- **Prompt**:
  > We are building my personal developer portfolio and documenting the entire process as a public tutorial.
  > Reference websites: nishchayjain, nayanbobde, maameyaa, zalt.me, manav-portfolio-lab (visual inspiration), cyntax.dev (feature inspiration).
  > Inspect references, analyze visual styles and features, propose cohesive design direction, page structure, reusable components, design tokens, and document in docs/DESIGN-DECISIONS.md, docs/PROJECT-LOG.md, and docs/TUTORIAL.md.
- **Files Changed**:
  - `docs/DESIGN-DECISIONS.md` (created)
  - `docs/PROJECT-LOG.md` (updated)
  - `docs/AI-PROMPTS.md` (updated)
  - `docs/TUTORIAL.md` (updated)
- **Result**:
  - Successfully synthesized an original design direction ("The Engineering Workbench") combining the high-tech lab aesthetic of Manav Portfolio Lab with the structured, authoritative client features of Cyntax.
  - Formulated a 9-section homepage plan, HeroUI v3 + Tailwind v4 design tokens, and a reusable component tree.
- **Errors and Fixes**:
  - Direct outbound `curl.exe` in terminal timed out due to sandbox/environment firewall restrictions.
  - Fixed by leveraging web search indexing, public GitHub repository profiles, and developer registries to analyze all 6 references accurately without inventing data.
