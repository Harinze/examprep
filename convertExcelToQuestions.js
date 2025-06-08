import XLSX from 'xlsx';
import fs from 'fs';

const workbook = XLSX.readFile('kcna-138.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

const rawData = XLSX.utils.sheet_to_json(worksheet);

const questions = rawData.map((row, index) => {
  const options = [
    row['Option A'],
    row['Option B'],
    row['Option C'],
    row['Option D'],
    row['Option E']
  ].filter(Boolean);

  return {
    id: row['#'] || index + 1,
    question: row['Question']?.trim(),
    options,
    correctAnswer: row['Correct Answer']?.trim(),
    explanation: row['Explanation']?.trim(),
    domain: row['Domain']?.trim() || '',
    competency: row['Competency']?.trim() || ''
  };
});

const output = `
export const questions = ${JSON.stringify(questions, null, 2)};
`;

fs.writeFileSync('kcna-questions-138.js', output);
console.log('✅ questions.js generated successfully!');
