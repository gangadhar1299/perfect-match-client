import { CastOption, ReligionOption, ZodiacOption } from "types";

export const RELIGION_OPTIONS: ReligionOption[] = [
  { value: "hindu", label: "Hindu" },
  { value: "cristian", label: "Cristian" },
  { value: "jain", label: "Jain" },
  { value: "muslim", label: "Muslim" },
  { value: "jewish", label: "Jewish" },
];

export const CAST_OPTIONS: CastOption[] = [
  { value: "NA", label: "NA" },
  { value: "Gowda", label: "Gowda" },
  { value: "Lingayath", label: "Lingayath" },
  { value: "SC", label: "SC" },
  { value: "ST", label: "ST" },
  { value: "Veerashaiva", label: "Veerashaiva" },
];

export const ZODIAC_OPTIONS: ZodiacOption[] = [
  { label: "Aquarius", value: "Aquarius" },
  { label: "Aries", value: "Aries" },
  { label: "Cancer", value: "Cancer" },
  { label: "Capricorn", value: "Capricorn" },
  { label: "Gemini", value: "Gemini" },
  { label: "Leo", value: "Leo" },
  { label: "Libra", value: "Libra" },
  { label: "Pisces", value: "Pisces" },
  { label: "Sagittarius", value: "Sagittarius" },
  { label: "Scorpio", value: "Scorpio" },
  { label: "Taurus", value: "Taurus" },
  { label: "Virgo", value: "Virgo" },
];
