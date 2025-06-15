// rename.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path absolut ke folder Visalux
const folderPath = path.join(__dirname, 'src/images/projectImages/kokits');
const prefix = 'kokits';

// Daftar ekstensi file gambar yang valid
const validExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('❌ Gagal membaca folder:', err);
    return;
  }

  // Filter hanya file gambar yang valid
  const imageFiles = files.filter(file =>
    validExtensions.includes(path.extname(file).toLowerCase())
  );

  imageFiles.forEach((file, index) => {
    const ext = path.extname(file);
    const oldPath = path.join(folderPath, file);
    const newName = `${prefix}-${index + 1}${ext}`;
    const newPath = path.join(folderPath, newName);

    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        console.error(`❌ Gagal mengganti nama ${file}:`, err);
      } else {
        console.log(`✅ ${file} → ${newName}`);
      }
    });
  });
});
