export type CVItem = {
  company: string;
  date: string;
  description: string;
  experience: {
    date: string;
    position: string;
    details: string[];
  }[];
};

export type ResumePartProps = {
  date: string;
  position: string;
  details: string[];
};
