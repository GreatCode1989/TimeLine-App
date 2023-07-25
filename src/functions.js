import { HOURS_IN_DAY, NAV_ITEMS, MID_NIGHT } from "./constants";
import { isPageValid } from "./validators";

export function normalizePageHash() {
  const page = window.location.hash.slice(1);

  if (isPageValid(page)) {
    return page;
  }
  const defaultPage = Object.keys(NAV_ITEMS)[0];
  return defaultPage;
}

export function generationtimelineItems() {
  const timelineItems = [];
  for (let hour = MID_NIGHT; hour < HOURS_IN_DAY; hour++) {
    timelineItems.push({ hour });
  }
  return timelineItems;
}
