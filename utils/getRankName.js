const nameWrapper2 = document.querySelector(".rank-name2")
const nameWrapper = document.querySelector(".rank-name-show-ui")
const ranks = [
    "Recruit I", "Recruit II", "Private I", "Private II", "Private III", "Private IV", "Private V", "Private First Class", "Cadet I", "Cadet II",
    "Corporal I", "Corporal II", "Corporal III", "Corporal IV", "Specialist I", "Specialist II", "Specialist III", "Specialist IV", "Specialist V", "Field Specialist",
    "Sergeant I", "Sergeant II", "Sergeant III", "Staff Sergeant I", "Staff Sergeant II", "Master Sergeant I", "Master Sergeant II", "First Sergeant", "Sergeant Major", "Command Sergeant",
    "Second Lieutenant", "First Lieutenant", "Lieutenant II", "Captain I", "Captain II", "Captain III", "Major I", "Major II", "Major III", "Major IV",
    "Major V", "Lieutenant Colonel I", "Lieutenant Colonel II", "Colonel I", "Colonel II", "Colonel III", "Colonel IV", "Colonel V", "Senior Colonel", "Chief Colonel",
    "Brigadier General I", "Brigadier General II", "Major General I", "Major General II", "Major General III", "Lieutenant General I", "Lieutenant General II", "General I", "General II", "General III",
    "General IV", "General V", "Supreme General", "War General", "Tactical General", "Strategic General", "Shadow General", "Commander General", "Honor General", "Field General",
    "Black Ops I", "Black Ops II", "Phantom I", "Phantom II", "Phantom III", "Ghost Commander", "Shadow Agent", "Tactical Chief", "Warden", "Enforcer",
    "Elite Operative", "High Operative", "Battle Strategist", "War Commander", "Operation Master", "Mastermind", "War Architect", "Commander of Legends", "Supreme Tactician", "Nexus Agent",
    "Ascendant I", "Ascendant II", "Ascendant III", "Grandmaster I", "Grandmaster II", "Immortal I", "Immortal II", "Immortal III", "Warlord", "Apex Commander"
  ];
  
export function getRankName(level) {
    if (level > 100) level = 100;
    nameWrapper.textContent = ranks[level - 1]
    nameWrapper2.textContent = ranks[level - 1]
  }
  