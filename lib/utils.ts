import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import updateLocale from "dayjs/plugin/updateLocale"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


dayjs.extend(relativeTime)
dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years"
  }
})

export function formatDate(date: Date) {
  const now = dayjs()
  const inputDate = dayjs(date)

  if (now.diff(inputDate, 'month') >= 1) {
    return inputDate.format('DD MMM')
  }

  return inputDate.fromNow()
}