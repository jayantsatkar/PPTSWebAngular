import { MenuItem } from "primeng/api";

export interface EnterpriseNode {
  key?: string;
  value?: string;
}

export interface BreadcrumMenuItem {
  label: string;
  item?: BreadcrumMenuItem;
}

export interface BreadcrumItem {
  key: string;
  label: string;
  type: string;
  command?: string;
}

export interface SlideMenuKvp {
  id: string;
  label: string;
  target: string;
}

export interface FilterBy {
  id: string;
  menuItems: MenuItem[];
}

