export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export type ContactItem = {
  label: string;
  name: string;
  value: string;
  href?: string;
  color?: string;
}