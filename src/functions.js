import { 
  PAGE_TIMELINE, 
  PAGE_ACTIVITIES, 
  PAGE_PROGRESS, 
  HOURS_IN_DAY,
  NAV_ITEMS
 } from "./constants";

export function normalizePageHash() {
    const hash = window.location.hash.slice(1);
  
    if ([PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS].includes(hash)) {
      return hash;
    }
    const defaultPage = Object.keys(NAV_ITEMS)[0];
    return defaultPage;
  }
  
export  function generationtimelineItems() {
    const timelineItems = [];
    for (let hour = 0; hour < HOURS_IN_DAY; hour++) {
      timelineItems.push({ hour });
    }
    return timelineItems;
  }