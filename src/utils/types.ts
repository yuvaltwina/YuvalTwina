export type TrefList = {
  Home: React.RefObject<HTMLDivElement>;
  About: React.RefObject<HTMLDivElement>;
  Projects: React.RefObject<HTMLDivElement>;
  Contact: React.RefObject<HTMLDivElement>;
  Navbar: React.RefObject<HTMLDivElement>;
};
export type TlinksList = {
  text: string;
  clickHandler: (title: keyof TrefList) => void;
}[];