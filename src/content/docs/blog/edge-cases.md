---
title: Handling Edge Cases More Robustly
date: 2026-07-06
---

## Sharper Edges

The last batch of changes across both the C and TypeScript versions of Meantonal is all about the same thing: handling malformed or extreme input more gracefully instead of silently producing garbage (or, in C's case, potentially writing past the end of a buffer). Several of these are **breaking changes**, so read through the following summary if you're upgrading:

### C (`meantonal-c`)

- **`pitch_spn`, `pitch_lily`, `pitch_helmholtz`, `pitch_abc`** now return `bool` instead of `void`, fixing a real buffer-overflow bug for pitches with extreme accidentals/octaves. `pitch_lily` and `pitch_abc` also now hard-reject (writing `"ERR"`) any accidental beyond a double sharp/flat, since neither notation has a symbol for anything more extreme.
- **`tuning_map_from_fifth`, `tuning_map_from_edo`, `create_edo_map`** now return `int` (0 = success) and write their result through a trailing out-param, instead of returning `TuningMap`/`EDOMap` by value. All three now reject fifths outside ~685.7¢–720¢, since anything wider or narrower can't produce a well-defined diatonic scale.
- New: **`pitch_audible`**, a predicate for whether a `Pitch`'s frequency (in a given tuning) falls within the range of human hearing (20Hz–20kHz).

### JS (`meantonal-js`)

- **`SPN.fromPitch`, `LilyPond.fromPitch`, `Helmholtz.fromPitch`, `ABC.fromPitch`** now `throw` for pitches whose accidental or octave is too extreme to represent, instead of silently building unbounded-length strings.
- **The `TuningMap` constructor, `TuningMap.fromEDO`, and `EDOMap`'s constructor** now `throw` for the same ~685.7¢–720¢ fifth restriction as the C library.
- New: **`Pitch.audible`**, mirroring the C predicate above.
