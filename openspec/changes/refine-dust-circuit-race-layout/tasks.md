# Tasks

## 1. Race screen and identity

- [x] 1.1 Recompose the course, race metrics, roster, and race actions into a course area and right-side HUD; verify wide layouts allocate about two-thirds to the course and one-third to HUD while preserving the complete 16:9 course.
- [x] 1.2 Replace the visible game identity with Off the Road / Dust Circuit and remove the specified studio, course, terrain, shortcut, and arcade labels from the interface and page metadata; verify none remain in the rendered UI or help dialog.
- [x] 1.3 Keep lap, elapsed time, connection, pause, sound, volume, build version, and Leave race available in the revised composition; verify their existing handlers and behavior remain connected.

## 2. Countdown and responsive verification

- [x] 2.1 Remove the “Engines ready” message, numeric pre-race countdown and “GO!” presentation while retaining countdown state and race-start timing; verify a race still begins on schedule without those callouts.
- [x] 2.2 Verify the narrow layout retains the whole 16:9 course and existing controls, then run the focused existing checks for UI behavior and production build.
- [x] 2.3 Start exactly one Vite preview, review the completed race screen in that preview, and stop for user approval before any merge or commit.
