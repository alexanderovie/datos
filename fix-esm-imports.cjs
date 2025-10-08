/**
 * Script para arreglar imports ESM añadiendo extensiones .js
 * Este script procesa los archivos compilados en dist/esm/ y añade
 * las extensiones .js a todos los imports relativos
 */

const fs = require('fs');
const path = require('path');

const esmDir = path.join(__dirname, 'dist', 'esm');

console.log('🔧 Iniciando fix-esm-imports...');
console.log(`📁 Directorio ESM: ${esmDir}`);

// Verificar que existe el directorio
if (!fs.existsSync(esmDir)) {
  console.error('❌ Error: No existe el directorio dist/esm/');
  process.exit(1);
}

/**
 * Procesa recursivamente todos los archivos .js en un directorio
 */
function processDirectory(directory) {
  const files = fs.readdirSync(directory);

  files.forEach(file => {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Procesar subdirectorios recursivamente
      processDirectory(fullPath);
    } else if (file.endsWith('.js')) {
      // Procesar archivos .js
      fixImportsInFile(fullPath);
    }
  });
}

/**
 * Arregla los imports en un archivo añadiendo extensiones .js
 */
function fixImportsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Patrón para encontrar imports relativos sin extensión
  // Busca: from "./algo" o from "../algo" pero NO from "./algo.js"
  const importRegex = /from\s+['"](\.\.[\/\\].*?|\.\/.*?)(?<!\.js)['"]/g;

  const newContent = content.replace(importRegex, (match, importPath) => {
    // Si ya tiene extensión .js, no modificar
    if (importPath.endsWith('.js')) {
      return match;
    }

    modified = true;
    // Añadir .js al import
    return match.replace(importPath, `${importPath}.js`);
  });

  // También arreglar exports re-exportados
  const exportRegex = /export\s+.*?\s+from\s+['"](\.\.[\/\\].*?|\.\/.*?)(?<!\.js)['"]/g;

  const finalContent = newContent.replace(exportRegex, (match, importPath) => {
    if (importPath.endsWith('.js')) {
      return match;
    }

    modified = true;
    return match.replace(importPath, `${importPath}.js`);
  });

  if (modified) {
    fs.writeFileSync(filePath, finalContent, 'utf8');
    const relativePath = path.relative(esmDir, filePath);
    console.log(`  ✓ ${relativePath}`);
  }
}

try {
  processDirectory(esmDir);
  console.log('✅ fix-esm-imports completado exitosamente');
} catch (error) {
  console.error('❌ Error durante fix-esm-imports:', error);
  process.exit(1);
}
