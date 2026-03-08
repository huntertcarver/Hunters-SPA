import skillsJson from "./skills.json";

export interface SkillData {
  skillLevel: number;
  definition: string;
}

type RawSkillData = {
  skillLevel?: number;
  skilllevel?: number;
  definition?: string;
};

const FALLBACK_SKILL: SkillData = {
  skillLevel: 0,
  definition: "This skill is not in the database.",
};

const normalizeSkillData = (skill: RawSkillData): SkillData => ({
  skillLevel: skill.skillLevel ?? skill.skilllevel ?? 0,
  definition: skill.definition ?? FALLBACK_SKILL.definition,
});

const normalizedSkills = Object.fromEntries(
  Object.entries(skillsJson as Record<string, RawSkillData>).map(([skillName, skillData]) => [
    skillName,
    normalizeSkillData(skillData),
  ])
) as Record<string, SkillData>;

export const skillNames = Object.keys(normalizedSkills);
export const skillsByName = new Map<string, SkillData>(Object.entries(normalizedSkills));

export const encodeSkillParam = (skillName: string): string =>
  skillName === "C#" ? "C" : encodeURIComponent(skillName);

export const normalizeSkillParam = (rawSkill: string | undefined): string => {
  if (!rawSkill) {
    return "";
  }

  let decodedSkill = rawSkill;

  try {
    decodedSkill = decodeURIComponent(rawSkill);
  } catch {
    decodedSkill = rawSkill;
  }

  return decodedSkill === "C" ? "C#" : decodedSkill;
};

export const getSkillByName = (skillName: string): SkillData =>
  skillsByName.get(skillName) ?? FALLBACK_SKILL;
