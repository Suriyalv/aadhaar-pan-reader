import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf";

// IMPORTANT: use CDN worker
pdfjsLib.GlobalWorkerOptions.workerSrc =
    `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export async function pdfToImage(file) {
    const pdf = await pdfjsLib.getDocument(
        URL.createObjectURL(file)
    ).promise;

    const page = await pdf.getPage(1);
    const viewport = page.getViewport({ scale: 2 });

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await page.render({
        canvasContext: context,
        viewport
    }).promise;

    return canvas.toDataURL("image/png");
}
