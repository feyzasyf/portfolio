import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
  const filePath = path.join(process.cwd(), 'public', 'cv-fs.pdf');
  const fileName = 'Feyza_Seyfi_CV.pdf';

  if (!fs.existsSync(filePath)) {
    return new Response('File not found', { status: 404 });
  }
  const data = await fs.promises.readFile(filePath);
  return new Response(data, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${fileName}"`,
    },
  });
}
