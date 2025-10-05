#!/usr/bin/env node

/**
 * Color Check Script
 * 
 * This script checks for purple color usage in the codebase.
 * Admin project should use EMERALD colors, not PURPLE!
 * 
 * Usage: npm run check:colors
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

const PURPLE_PATTERNS = [
  /purple-\d+/g,          // purple-50, purple-500, etc.
  /bg-purple/g,           // bg-purple-*
  /text-purple/g,         // text-purple-*
  /border-purple/g,       // border-purple-*
  /ring-purple/g,         // ring-purple-*
  /from-purple/g,         // from-purple-*
  /to-purple/g,           // to-purple-*
  /#[0-9A-Fa-f]{6}/g,     // Hex colors (might be purple)
];

const PURPLE_HEX_COLORS = [
  '#9333ea', '#a855f7', '#c084fc', '#d8b4fe', '#e9d5ff', '#f3e8ff', // purple-600, 500, 400, 300, 200, 100
  '#7c3aed', '#6d28d9', '#5b21b6', '#4c1d95',                       // purple-700, 800, 900, 950
];

const SRC_DIR = 'src';
const EXTENSIONS = ['.jsx', '.js', '.tsx', '.ts'];

let totalFiles = 0;
let filesWithIssues = 0;
let totalIssues = 0;

function getAllFiles(dir, fileList = []) {
  const files = readdirSync(dir);

  files.forEach(file => {
    const filePath = join(dir, file);
    const stat = statSync(filePath);

    if (stat.isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (EXTENSIONS.includes(extname(file))) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

function checkFile(filePath) {
  const content = readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const issues = [];

  lines.forEach((line, index) => {
    const lineNumber = index + 1;

    // Check for purple Tailwind classes
    PURPLE_PATTERNS.forEach(pattern => {
      const matches = line.match(pattern);
      if (matches) {
        matches.forEach(match => {
          // Skip if it's a comment about conversion
          if (line.includes('WRONG') || line.includes('Figma') || line.includes('TODO')) {
            return;
          }

          issues.push({
            line: lineNumber,
            match: match,
            context: line.trim(),
          });
        });
      }
    });

    // Check for purple hex colors
    PURPLE_HEX_COLORS.forEach(hex => {
      if (line.toLowerCase().includes(hex.toLowerCase())) {
        // Skip if it's a comment about conversion
        if (line.includes('WRONG') || line.includes('Figma') || line.includes('TODO')) {
          return;
        }

        issues.push({
          line: lineNumber,
          match: hex,
          context: line.trim(),
        });
      }
    });
  });

  return issues;
}

function main() {
  console.log('\n🎨 Checking for PURPLE color usage...\n');
  console.log('Admin project should use EMERALD, not PURPLE!\n');
  console.log('━'.repeat(60));

  const files = getAllFiles(SRC_DIR);
  totalFiles = files.length;

  files.forEach(file => {
    const issues = checkFile(file);

    if (issues.length > 0) {
      filesWithIssues++;
      totalIssues += issues.length;

      console.log(`\n❌ ${file}`);
      issues.forEach(issue => {
        console.log(`   Line ${issue.line}: ${issue.match}`);
        console.log(`   ${issue.context}`);
      });
    }
  });

  console.log('\n' + '━'.repeat(60));
  console.log('\n📊 Summary:');
  console.log(`   Total files checked: ${totalFiles}`);
  console.log(`   Files with issues: ${filesWithIssues}`);
  console.log(`   Total purple usage: ${totalIssues}`);

  if (filesWithIssues === 0) {
    console.log('\n✅ Great! No purple colors found.');
    console.log('   All colors follow the admin color scheme (Emerald).\n');
    process.exit(0);
  } else {
    console.log('\n⚠️  Purple colors detected!');
    console.log('   Please convert all purple → emerald.');
    console.log('\n   Quick fix:');
    console.log('   • purple-50  → emerald-50');
    console.log('   • purple-500 → emerald-500');
    console.log('   • purple-600 → emerald-600');
    console.log('   • purple-700 → emerald-700');
    console.log('\n   See FIGMA_TO_CODE.md for full guide.\n');
    process.exit(1);
  }
}

main();
