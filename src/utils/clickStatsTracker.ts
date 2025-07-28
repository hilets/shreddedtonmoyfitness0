
export const trackProgramClick = (programName: string) => {
  const today = new Date().toDateString();
  const storageKey = `clickStats_${today}`;
  
  // Get existing stats
  const existingStats = localStorage.getItem(storageKey);
  const stats = existingStats ? JSON.parse(existingStats) : {
    'Online Contest Prep Program': 0,
    'Bulking & Cutting Training Program': 0,
    'Online Weight Loss & Gain Program': 0
  };
  
  // Increment the specific program's count
  if (stats.hasOwnProperty(programName)) {
    stats[programName] = (stats[programName] || 0) + 1;
  }
  
  // Save back to localStorage
  localStorage.setItem(storageKey, JSON.stringify(stats));
  
  console.log(`Tracked click for: ${programName}`, stats);
};

export const trackClick = (itemName: string) => {
  const today = new Date().toDateString();
  const storageKey = `clickStats_${today}`;
  
  // Get existing stats
  const existingStats = localStorage.getItem(storageKey);
  const stats = existingStats ? JSON.parse(existingStats) : {
    // Programs
    'Online Contest Prep Program': 0,
    'Bulking & Cutting Training Program': 0,
    'Online Weight Loss & Gain Program': 0,
    // Ebooks
    'Bulking Diet & Workout Book': 0,
    'Cutting Diet & Workout Book': 0,
    '90 Days Transformation Challenge': 0
  };
  
  // Increment the specific item's count
  if (stats.hasOwnProperty(itemName)) {
    stats[itemName] = (stats[itemName] || 0) + 1;
  } else {
    // If item doesn't exist in default stats, add it
    stats[itemName] = 1;
  }
  
  // Save back to localStorage
  localStorage.setItem(storageKey, JSON.stringify(stats));
  
  console.log(`Tracked click for: ${itemName}`, stats);
};
