// This file merges lecture content into course data at runtime
import { COURSE_DATA } from './courseData.js';
import { MODULE_LECTURES } from './moduleLectures.js';
import { MODULE_11_LECTURES, MODULE_11_DATA } from './module11Data.js';

export function getCourseDataWithLectures() {
  const data = JSON.parse(JSON.stringify(COURSE_DATA));
  
  // Merge lecture content into existing modules
  for (const week of data.weeks) {
    for (const mod of week.modules) {
      if (MODULE_LECTURES[mod.id] && MODULE_LECTURES[mod.id].length > 0) {
        if (!mod.lectureContent || mod.lectureContent.length === 0) {
          mod.lectureContent = MODULE_LECTURES[mod.id];
        }
      }
    }
  }
  
  // Add Module 11 as a new week
  const m11 = JSON.parse(JSON.stringify(MODULE_11_DATA));
  m11.lectureContent = MODULE_11_LECTURES;
  
  data.weeks.push({
    id: 5,
    title: "Bank-led blockchain infrastructure",
    hours: "4.5 hrs",
    theme: "Deposit tokens, payments efficiency frameworks, MAS vs MiCA regulatory analysis, and institutional blockchain architecture — bridging theory to bank-grade product development.",
    colorVar: "green",
    modules: [m11]
  });
  
  // Update meta
  data.meta = "3 weeks + 2 bonus modules · 12–15 hrs/week · 11 modules · 8 assessments · 1 final project";
  
  return data;
}
