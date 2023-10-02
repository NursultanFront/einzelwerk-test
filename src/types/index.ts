export interface ISliderInfo {
  title: string;
  text: string;
  image: string;
}

export interface ITabletTabs {
  tabs: ITab[];
}

export interface ITab {
  name: string;
  content: IContent[];
}

export interface IContent {
  title: string;
  text: string;
  items?: string[];
}
