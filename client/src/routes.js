import { Component } from "react";
import {
  ADMIN_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "./utils/consts";
import { Admin } from "./pages/Admin";
import Auth from "./pages/Auth";
import DevicePage from "./pages/DevicePage";
import Shop from "./pages/Shop";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Admin,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Admin,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: DEVICE_ROUTE + "/:id",
    Component: DevicePage,
  },
];
