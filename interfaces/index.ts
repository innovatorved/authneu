// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

import { NextApiResponse } from "next";
import { CookieSerializeOptions } from "cookie";

export interface NextResponse extends NextApiResponse {
  cookie(name: string, value: string, options?: CookieSerializeOptions): void;
}

export interface User {
  id?: number;
  first_name: string;
  last_name?: string;
  email: string;
  username: string;
  createdAt: string;
  updatedAt: string;
}
