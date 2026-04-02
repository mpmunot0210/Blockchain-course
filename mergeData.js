// This file merges lecture content into course data at runtime
import { COURSE_DATA } from './courseData.js';
import { MODULE_LECTURES } from './moduleLectures.js';

export function getCourseDataWithLectures() {
  const data = JSON.parse(JSON.stringify(COURSE_DATA));
  
  for (const week of data.weeks) {
    for (const mod of week.modules) {
      if (MODULE_LECTURES[mod.id] && MODULE_LECTURES[mod.id].length > 0) {
        // Only override if the module doesn't already have lecture content
        if (!mod.lectureContent || mod.lectureContent.length === 0) {
          mod.lectureContent = MODULE_LECTURES[mod.id];
        }
      }
    }
  }
  
  return data;
}
