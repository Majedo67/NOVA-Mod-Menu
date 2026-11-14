# NOVA PS3 Implementation Plan

## Current status

The GitHub Pages project is a browser-based interface prototype. It does not run inside GTA V, load as a PS3 plugin, control the game, or access the console filesystem. Buttons and switches only change the page preview.

A real GTA V PS3 1.10 implementation has not been built or verified. Do not install this website as a plugin or replace game files with it.

## Menu order

1. Player
2. Characters
3. Vehicles
4. Teleport
5. File Manager
6. Settings

## Module specifications

### 1. Player
- Fly Mode toggle concept
- Noclip toggle concept
- Flight speed presets: Slow, Normal, Fast
- Super Jump and Fast Run options
- Controller mapping is not implemented or verified.

### 2. Characters
- Michael
- Franklin
- Trevor
- Lamar

### 3. Vehicles
- Vehicle selection/spawner interface concept
- Repair and clean options
- Vehicle option placeholders
- Vehicle-name input in the web preview only

### 4. Teleport
- Waypoint placeholder
- Character safehouse shortcuts
- Custom coordinate entry in the web preview only

### 5. File Manager
Potential USB support must be verified on the actual PS3. USB mount names and paths can vary by device and connection order. A website cannot see PS3 USB storage.

Safety requirements for any future console-side file tool:
- Detect and display mounted USB devices before browsing.
- Start with read-only browsing.
- Show full source and destination paths before copying.
- Never overwrite original game files by default.
- Require a separate confirmation before any write, move, or delete.
- Keep backups and log completed operations.
- Only target a verified mod-data folder, not an assumed GTA installation path.

### 6. Settings
- Theme preference concept
- Startup sound preference placeholder
- Open sequence and close-button preference placeholders
- Reset website preview controls

## Compatibility checks still required

- Confirm the exact GTA V title ID and active installation path.
- Confirm the running game update is 1.10.
- Identify a documented plugin loader and development toolchain compatible with the console setup.
- Test only with backed-up, non-original files first.
