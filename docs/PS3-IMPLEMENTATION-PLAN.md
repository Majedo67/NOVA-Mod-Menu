# NOVA PS3 Implementation Plan

## Important status

The current GitHub Pages project is a browser-based interface prototype. It does not run inside GTA V, load as a PS3 plugin, or access the console filesystem.

A real GTA V PS3 1.10 implementation is not yet built or verified. Do not install this website as a plugin or replace game files with it.

## Menu order

1. Player
2. Characters
3. Vehicles
4. Teleport
5. Settings
6. File Manager

## Player module — first development target

Planned controls:
- Fly Mode toggle
- Noclip toggle
- Flight speed presets: Slow, Normal, Fast
- Proposed controller mapping: left stick to move, right stick to look, R2 to rise, L2 to descend

These are design requirements only. They are not working in-game controls until a compatible PS3 1.10 plugin is implemented and tested.

## File Manager — last development target

Potential USB support must be verified on the actual PS3 before implementation. USB mount names such as /dev_usb000 can vary by device and connection order.

Safety requirements:
- Detect and display mounted USB devices before browsing.
- Start with read-only browsing.
- Show full source and destination paths before copying.
- Never overwrite original game files by default.
- Require a separate confirmation before any write, move, or delete.
- Keep backups and log each completed operation.
- Only target a verified mod-data folder, not an assumed GTA installation path.

## Compatibility checks still required

- Confirm the exact GTA V title ID and active installation path.
- Confirm the running game update is 1.10.
- Identify a documented plugin loader and development toolchain compatible with the console setup.
- Test on backed-up, non-original files first.
