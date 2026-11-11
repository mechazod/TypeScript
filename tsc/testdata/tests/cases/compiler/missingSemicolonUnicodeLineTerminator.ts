// @target: esnext

// U+2028 LINE SEPARATOR
const a = (x: number) => x (1);

// U+2029 PARAGRAPH SEPARATOR
const b = (x: number) => x (1);

// Indented U+2028 LINE SEPARATOR
const c = (x: number) => x   (1);

// Indented U+2029 PARAGRAPH SEPARATOR
const d = (x: number) => x   (1);

// Standard newline for comparison
const e = (x: number) => x
(1);
