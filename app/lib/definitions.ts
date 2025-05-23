export type Navigation = {
  id: number;
  title: string;
  segment: string;
  children?: Navigation[];
};

export type Person = {
  id: number;
  name: string;
  role: string;
  rating: number;
  text: string;
  imageUrl: string;
};

export type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};
