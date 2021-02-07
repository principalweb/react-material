import pdfjs, { PDFPageProxy } from 'pdfjs-dist';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const readFileAsync = (file: File, asArrayBuffer = false): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result as string);
    };
    reader.onerror = reject;

    if (asArrayBuffer) {
      reader.readAsArrayBuffer(file);
    } else if (file instanceof Blob) {
      reader.readAsDataURL(file);
    } else {
      reject('Invalid file');
    }
  });

const pageToImage = (page: PDFPageProxy, fileName: string): Promise<File> =>
  new Promise((resolve, reject) => {
    const viewport = page.getViewport({ scale: 1 });

    const canvas = document.createElement('canvas') as HTMLCanvasElement;

    if (canvas) {
      const context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      if (context) {
        const task = page.render({ canvasContext: context, viewport: viewport });
        task.promise.then(function() {
          canvas.toBlob(blob => {
            if (blob) {
              canvas.remove();

              resolve(
                new File([blob], `${fileName}_page_${page.pageNumber}.jpeg`, {
                  type: 'image/jpeg',
                }),
              );
            }
          }, 'image/jpeg');
        });
      }
    }
  });

export const pdfToImages = (file: File): Promise<File[]> =>
  new Promise(async (resolve, reject) => {
    const pdfFile = await readFileAsync(file, true);

    pdfjs.getDocument(pdfFile).promise.then(async pdf => {
      const indexes = Array.from(Array(pdf.numPages).keys());
      const pages = await Promise.all<PDFPageProxy>(
        indexes.map(
          page =>
            new Promise((resolve, reject) => {
              pdf.getPage(page + 1).then(resolve, reject);
            }),
        ),
      );
      const files = await Promise.all<File>(pages.map((page: PDFPageProxy) => pageToImage(page, file.name)));

      resolve(files);
    });
  });
