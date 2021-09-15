interface HeaderProps {
  level: number;
  children: JSX.Element | string;
}

interface ParagraphProps {
  styles: string[];
  children: JSX.Element | string;
}

interface SpaceBlockProps {
  blockHeight: number;
}

interface ImageProps {
  source: string;
  floatStyle: string;
}

interface CollapsingProps {
  headerTxt: string;
  children: JSX.Element | string;
}

interface CollapsingState {
  isHidden: boolean;
}

interface ColumnProps {
  count: number;
  children: JSX.Element | string;
}
