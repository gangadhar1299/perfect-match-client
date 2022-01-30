export type Religions = "hindu" | "cristian" | "muslim" | "jewish" | "jain";

export type ReligionOption = { value: Religions; label: string };

export type Casts = "NA" | "Gowda" | "Veerashaiva" | "Lingayath" | "SC" | "ST";

export type CastOption = { value: Casts; label: Casts };

export type Zodiacs =
  | "Capricorn"
  | "Aquarius"
  | "Pisces"
  | "Aries"
  | "Taurus"
  | "Gemini"
  | "Cancer"
  | "Leo"
  | "Virgo"
  | "Libra"
  | "Scorpio"
  | "Sagittarius"
  | "Capricorn";

export type ZodiacOption = { value: Zodiacs; label: Zodiacs };

export type Genders = "F" | "M";

export type User = {
  firstName: string;
  lastName: string;
  gender: Genders;
  mobile: number;
  email: string;
  dob: string;
  religion: Religions;
  caste: string;
  zodiac: string;
};

export type Authentication = {
  user: User;
  token?: string;
};

export type LoginValues = {
  username: string;
  password: string;
};
