# Proposal

## Why

The current game gives the course the full page width and surrounds it with branded track names and feature callouts, making the interface feel like a promotional page instead of a focused race view. A persistent split layout will give the course the largest practical area while keeping race status and controls together in a compact HUD.

## What Changes

- Rework the race screen into a two-column composition: preserve the course's aspect ratio and scale it to fill roughly the left two-thirds of the available play area, with a HUD rail occupying roughly the right third.
- Present the game as **Off the Road**, shown as **Dust Circuit**, and remove the specified studio, circuit, terrain-feature, shortcut, and “Original Off-Chain Arcade” labels.
- Remove the “Engines ready” countdown message, numeric countdown, and “GO!” callout while preserving countdown timing and race-start behavior.
- Keep lap, elapsed time, connection status, pause, sound, volume, app build version, and Leave race available in the revised layout.
- Preserve all existing race modes, controls, simulation, track features, online behavior, and audio behavior.

## Capabilities

### New Capabilities

None.

### Modified Capabilities

- `arcade-racing`: Specify the course-and-HUD composition, course aspect-ratio behavior, permitted game identity, retained race controls/status, and removal of the countdown presentation without changing race timing.

## Impact

- Updates the user-facing composition in `project-name/src/main.js`, layout rules in `project-name/src/style.css`, and page title/description in `project-name/index.html`.
- Changes only presentation and copy. No racing rules, network protocol, dependencies, assets, or backend behavior change.
