// Aadhaar: 12 digits (with or without spaces)
export const AADHAAR_REGEX =
    /\b\d{4}\s?\d{4}\s?\d{4}\b/g;

// PAN: 5 letters + 4 digits + 1 letter
export const PAN_REGEX =
    /\b[A-Z]{5}[0-9]{4}[A-Z]\b/g;
