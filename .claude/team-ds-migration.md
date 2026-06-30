---
type: agent-team
name: ds-migration-team
lead: ds-migration-lead
---

# Team: DS Migration (example / learning exercise)

> Example goal for practicing the agent-team structure. Not an active migration —
> the repo is still static HTML. Swap the Goal when a real multi-week task exists.

## Goal
Migrate the static HTML/Tailwind playground into a React + Storybook design system:
React components, extracted design tokens, Storybook docs, reviewed and merged.

## Lead agent
`ds-migration-lead` — owns the shared task list, splits the goal into subtasks,
delegates each to a peer, integrates results, runs review, prepares the final PR.
Runtime note: Claude Code has no persistent lead daemon — the main Claude session
plays lead by reading this file, or a Workflow script executes it.

## Peer agents
- **component-implementer** — convert HTML/Tailwind markup into React components.
- **tokens-engineer** — extract colors/spacing/type into design tokens.
- **code-reviewer** — review each component PR (reuses the global code-reviewer).
- **doc-writer** — write Storybook MDX per component (reuses the global doc-writer).

## Shared task list location
`.claude/tasks/ds-migration.md` — owned by the lead; tracks done / in-progress / queued.

## Workflow
1. Lead reads the Goal and breaks it into subtasks in the shared task list.
2. Each peer takes its subtask and works in its own session.
3. Lead collects results, validates, and merges into the final PR.
