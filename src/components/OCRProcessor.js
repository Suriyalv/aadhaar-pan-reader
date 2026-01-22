import Tesseract from "tesseract.js";
import { AADHAAR_REGEX, PAN_REGEX } from "../utils/regex";

export async function extractIDNumbers(image) {
    const { data: { text } } = await Tesseract.recognize(image, "eng", {
        logger: m => console.log(m),
    });

    const aadhaar = text.match(AADHAAR_REGEX);
    const pan = text.match(PAN_REGEX);

    return {
        aadhaar: aadhaar ? aadhaar[0] : null,
        pan: pan ? pan[0] : null,
        rawText: text
    };
}
