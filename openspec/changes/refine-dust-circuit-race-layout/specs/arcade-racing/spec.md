# Spec Delta

## MODIFIED Requirements

### Requirement: Landscape course presentation
The game SHALL show the full course from a fixed elevated orthographic camera in a 16:9 course viewport that preserves its aspect ratio. In wide layouts, the course viewport SHALL fill approximately the left two-thirds of the play area and the HUD SHALL occupy approximately the right third; the course SHALL be as large as the available area permits without cropping. Original Blender assets SHALL include four numbered truck variants, articulated rigid wheels, terrain, tabletop jump, washboard, mud, shortcut, prop kit and two pickup types. Narrow displays SHALL retain the entire course without changing its aspect ratio.

#### Scenario: Wide race layout
- **WHEN** a race is shown in a wide viewport
- **THEN** the full course uses approximately two-thirds of the play area and the race HUD uses approximately one-third

#### Scenario: Resize during race
- **WHEN** the viewport becomes narrow
- **THEN** the full course remains visible at its original aspect ratio without camera following, rotation or zoom toward a truck

### Requirement: Full race loop and delivery
The game SHALL implement waiting/ready, countdown, three-lap racing, authoritative online standings/results, pickups and replay using the released shared racing rules. Audio SHALL begin after interaction and support mute/volume. Unsupported WebGPU or asset initialization SHALL show actionable errors. Delivery SHALL include editable sources, actual gameplay evidence and verified public game/backend versions. The pre-race countdown SHALL continue to govern race timing but SHALL NOT be shown as an “Engines ready” message, a numeric countdown, or a “GO!” callout.

#### Scenario: Replay
- **WHEN** a race completes and players ready again
- **THEN** the next race resets the grid, nitro and temporary effects with equal base performance

#### Scenario: Race countdown presentation
- **WHEN** the race enters its pre-race countdown
- **THEN** the countdown still determines when racing begins and no “Engines ready” message, countdown number, or “GO!” callout is displayed

## ADDED Requirements

### Requirement: Off the Road game identity
The game SHALL present its identity as “Off the Road” with “Dust Circuit” as its displayed game name. The interface SHALL NOT show “Ravello Arcade Racing” or “Rivello · Arcade Racing,” “Quarry Circuit 01,” “Copper Basin,” “Tabletop Jump,” “Washboard,” “Mud Patch,” “Risk/Reward,” “Original Off-Chain Arcade,” or “Original Off-Road Arcade” labels.

#### Scenario: Open the game
- **WHEN** a player opens the game or its help dialog
- **THEN** the visible game identity uses “Off the Road” and “Dust Circuit” and none of the removed labels appear

### Requirement: Persistent race HUD controls
The race HUD SHALL keep lap, elapsed time, connection status, pause, sound, volume, app build version and Leave race available while preserving their existing behavior.

#### Scenario: Race controls remain available
- **WHEN** a player enters or plays a race
- **THEN** the HUD provides lap, elapsed time, connection status, pause, sound, volume, app build version and Leave race
