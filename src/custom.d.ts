declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.module.css';

declare module 'react-anchor-link-smooth-scroll' {
  interface Props {
    href: string;
    offset?: string | number;
    onClick?: (e: Event) => void;
    [key: string]: any;
  }

  export default class AnchorLink extends React.Component<Props> {}
}
