const flagMap: Record<string, string> = {
  "Australia": "🇦🇺",
  "New Zealand": "🇳🇿",
  "Europe": "🇪🇺",
  "India": "🇮🇳",
  "Middle East": "🇦🇪",
  "Germany": "🇩🇪",
  "United Kingdom": "🇬🇧",
  "Spain": "🇪🇸",
  "Singapore": "🇸🇬",
  "Chennai, India": "🇮🇳",
  "Bangalore, India": "🇮🇳",
  "Thanjavur, India": "🇮🇳",
};

export function getFlag(location: string): string {
  if (flagMap[location]) return flagMap[location];
  for (const [key, flag] of Object.entries(flagMap)) {
    if (location.includes(key)) return flag;
  }
  return "";
}
