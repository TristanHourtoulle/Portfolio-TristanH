# Fonts in this directory

The three OpenType files here are **not** original work of this repository.
They are format conversions of two third-party families, both licensed under
the **SIL Open Font License, Version 1.1**.

They exist only because Satori, the renderer behind `next/og`, cannot read
WOFF2 (see the note on `loadOgFonts` in `src/lib/og-image.tsx`). They are read
at build time by the Open Graph image routes and are never served to browsers;
the faces the site actually serves are the WOFF2 files in `public/fonts/`.

## Copyright notices

Reproduced verbatim from the upstream licence files. The OFL requires these to
accompany every copy of the font software, including modified copies.

> Copyright © 2023, Collletttivo (https://www.collletttivo.it/ | collletttivo@gmail.com)

> Copyright (c) 2023 Eigil Nikolajsen (eigi0088@gmail.com)

Neither family declares a Reserved Font Name, so the converted files keep
their original family names.

## Files and what was done to them

| File | Family | Upstream version | Modification applied |
| --- | --- | --- | --- |
| `ApfelGrotezk-Regular.otf` | Apfel Grotezk Regular, Collletttivo | 002.000 | Container change only: `public/fonts/ApfelGrotezk-Regular.woff2` decoded to bare OpenType/CFF with fontTools. No outline, metric or name-table edit. |
| `ApfelGrotezk-Fett.otf` | Apfel Grotezk Fett, Collletttivo | 002.000 | Same container change, from `public/fonts/ApfelGrotezk-Fett.woff2`. |
| `CommitMono-Regular.otf` | CommitMono Regular, Eigil Nikolajsen | 1.143 | Container change from `public/fonts/CommitMono-Regular.woff2`, **plus** a subset to Latin-1 and common punctuation (270 KB to 20 KB). Subsetting is a modification under the OFL; it stays under the OFL. |

## Full licence texts

The complete OFL 1.1 text for each family lives in this same repository, in
the directory that also ships the original WOFF2 files:

- Apfel Grotezk: [`public/fonts/ApfelGrotezk-LICENSE.txt`](../../../public/fonts/ApfelGrotezk-LICENSE.txt)
- CommitMono: [`public/fonts/CommitMono-LICENSE.txt`](../../../public/fonts/CommitMono-LICENSE.txt)

Those two files are pointed to rather than copied a third time, deliberately.
The OFL requires the licence to be distributed *with* the font software, not
to sit in the same folder as it. `public/fonts/` is part of every artifact
that contains this directory: the repository, any clone of it, and the
deployed site, where the licence files are additionally reachable over HTTP at
`/fonts/ApfelGrotezk-LICENSE.txt` and `/fonts/CommitMono-LICENSE.txt`. A third
byte-identical copy of the same 4 KB text would add no legal effect and one
more thing to keep in sync. The copyright notices above, by contrast, are
reproduced in full here rather than referenced, because those are the part the
licence requires to travel with the files themselves.

## If you add or replace a font here

1. Convert from the WOFF2 already in `public/fonts/`, never from an unchecked
   download, so the two directories cannot drift apart.
2. Check the upstream licence permits the conversion and the subsetting.
3. Add a row to the table above and, if the family is new, its copyright
   notice and a pointer to its full licence text.
