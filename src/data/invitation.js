// Central invitation content — mirrors the wed010 livedemo reference.

export const MAP_URL =
  'https://maps.google.com/?cid=3260281787863214776&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYASAA&hl=en-US&source=apiv3'

export const WEDDING_DATE = new Date('2026-10-31T11:00:00+05:30')

export const invitation = {
  inviteText: 'Inviting you to the celebration of',
  bride: 'Alia Nair',
  groom: 'Aryan kapoor',
  dateLine: 'Oct 30 & 31, 2026 | Hall Complex',
  venue: 'Hall Complex',
  countdownTitle: 'Let the Countdown begins',
  scheduleHeading: 'The wedding celebrations begins!',
}

export const couple = {
  bride: {
    name: 'Alia Nair',
    relation: 'D/o Mr. Suresh Nair & Mrs. Lakshmi Nair',
    desc: 'A free spirit wrapped in grace, Alia moves through life with quiet confidence, an infectious laugh, and a kindness that makes everyone around her feel at home.',
    image: '/assets/images/bride.jpg',
  },
  groom: {
    name: 'Aryan kapoor',
    relation: 'S/o Mr. Rajesh Kapoor & Mrs. Meena Kapoor',
    desc: "A gentle soul with a poet's heart and an architect's mind, Aryan finds beauty in the details, whether in the curve of a building or the warmth of a quiet afternoon.",
    image: '/assets/images/groom.jpg',
  },
}

export const initialWishes = [
  {
    name: 'Rahul',
    message:
      'May your marriage be filled with endless love, shared dreams, warm laughter, and beautiful adventures. Wishing you both a wonderful life together, surrounded by happiness, peace, and love.',
  },
  {
    name: 'Priya',
    message:
      'Wishing you both a lifetime of love and happiness. May every day together be as beautiful as your wedding day. Congratulations!',
  },
  {
    name: 'Amit',
    message:
      'So happy to celebrate this special day with you both. Wishing you endless joy, laughter and togetherness. Cheers to the newlyweds!',
  },
]

export const scheduleDays = [
  {
    label: 'Day 1',
    title: 'Day1',
    date: '30 October 2026',
    events: [
      { name: 'Haldi', time: '7:30 pm' },
      { name: 'Dinner', time: '9:00 pm' },
    ],
    address: 'Hall Complex',
    image: '/assets/images/schedule-day1.webp',
  },
]

export const AI_WISH_SUGGESTIONS = [
  'Wishing you both a lifetime of love, laughter and togetherness. Congratulations on your beautiful beginning!',
  'May your bond grow stronger with every passing day. Heartfelt congratulations to the lovely couple!',
  'Two souls, one beautiful journey. Wishing you endless happiness and love on your special day!',
]
