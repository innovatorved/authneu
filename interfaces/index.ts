import { ReactNode } from "react";

export interface User {
  id?: string;
  first_name: string;
  last_name?: string;
  email: string;
  username: string;
}

export type LayoutProps = {
  children?: ReactNode;
  title?: string;
};
