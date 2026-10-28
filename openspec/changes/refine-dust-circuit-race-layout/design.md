# Design

## Context

See `proposal.md` for motivation and `specs/arcade-racing/spec.md` for the behavior contract. The current application builds its UI in `project-name/src/main.js`; `project-name/src/style.css` gives `#game` a centered 16:9 viewport, while race metrics, roster, and actions occupy separate blocks around it. The canvas and fixed orthographic camera already use a 16:9 view. The local countdown state controls the existing simulation; the countdown number and shared “Engines ready”/“GO!” event text are presentation only.

## Goals / Non-Goals

**Goals:**

- Make the course and HUD read as one race screen, with the course taking the largest practical area.
- Keep the existing course framing and gameplay while removing the requested UI labels and countdown callout.
- Preserve the listed race status, controls, audio settings, and build version.

**Non-Goals:**

- Changing the track, camera behavior, race simulation, countdown duration, networking, modes, input mappings, audio engine, or dependencies.
- Removing physical course features or changing their gameplay effects.

## Decisions

### Compose the race screen as course and HUD regions

Place the course viewport and HUD in a shared layout region. At wide sizes, allocate approximately two-thirds to the course and one-third to the HUD. Keep the existing 16:9 course view and let its rendered area shrink to fit available width and height, rather than distorting or cropping it. At narrow sizes, use the existing responsive breakpoints to stack or compact surrounding UI while keeping the whole course visible at 16:9.

An alternative is to keep the current centered course and move only the metrics. That would leave the race controls and roster scattered around the page, so the course/HUD regions should own the complete race information and actions. The existing fixed camera and engine/view boundary remain untouched.

### Remove presentation elements without changing race state

Remove the specified title, course, feature, studio, and promotional labels from the rendered interface and page metadata. Remove the “Engines ready” status message and numeric countdown/“GO!” text presentation from the race view, but leave the countdown state and simulation transition unchanged. Keep physical track features, pickups, standings, controls, audio, and leave-race behavior.

### Preserve existing control behavior

Keep lap, elapsed time, connection state, pause, sound, volume, app build version, and Leave race visible in the race-screen composition. Reuse their existing event handlers and state sources; this is a placement and copy change rather than a new control model.

## Risks / Trade-offs

- [A one-third HUD rail can become cramped on small screens] → Use the existing narrow-screen responsive behavior and preserve the whole aspect-correct course.
- [Moving controls can accidentally hide an action or disconnect its handler] → Keep existing control IDs and verify the full retained-control list in the single preview and browser checks.
- [Removing the countdown display could be mistaken for removing countdown behavior] → Keep simulation state/timing intact and verify race start still occurs after the same countdown.

## Migration Plan

No data or backend migration is needed. During the later Apply workflow, implement the presentation change, run focused checks, start exactly one Vite preview for review, and stop for the user's approval before any merge or commit.
