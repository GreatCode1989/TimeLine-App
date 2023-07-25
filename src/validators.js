import { NAV_ITEMS, HOURS_IN_DAY, MID_NIGHT } from "./constants";

export function isPageValid(page) {
  return Object.keys(NAV_ITEMS).includes(page);
}

export function isTimelineItems({ hour }) {
  return isHourValid(hour);
}

export function isHourValid(hour) {
  return isNumber(hour) && isBetween(hour, MID_NIGHT, HOURS_IN_DAY - 1);
}

export function validateSelectOptions(options) {
  return options.every(isSelectOptionValid);
}

function isSelectOptionValid({ value, label }) {
  return isNumber(value) && isString(label);
}

export function validateTimeLineItems(timelineItems) {
  return timelineItems.every(isTimelineItems);
}

export function isUndefinedOrNull(value) {
  return isUndefined(value) || isNull(value);
}

export function isNumberOrNull(value) {
  return isNumber(value) || isNull(value);
}

function isBetween(value, start, end) {
  return value >= start && value <= end;
}

function isNull(value) {
  return value === null;
}

function isUndefined(value) {
  return value === undefined;
}

function isNumber(value) {
  return typeof value === "number";
}

function isString(value) {
  return typeof value === "string";
}
