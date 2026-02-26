import { createBrowserRouter } from "react-router";
import { LoginScreen } from "./components/LoginScreen";
import { MapScreen } from "./components/MapScreen";
import { ParkingDetailScreen } from "./components/ParkingDetailScreen";
import { ConfirmationScreen } from "./components/ConfirmationScreen";
import { FavoritesScreen } from "./components/FavoritesScreen";
import { BookingsScreen } from "./components/BookingsScreen";
import { ProfileScreen } from "./components/ProfileScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LoginScreen,
  },
  {
    path: "/map",
    Component: MapScreen,
  },
  {
    path: "/parking/:id",
    Component: ParkingDetailScreen,
  },
  {
    path: "/confirmation",
    Component: ConfirmationScreen,
  },
  {
    path: "/favorites",
    Component: FavoritesScreen,
  },
  {
    path: "/bookings",
    Component: BookingsScreen,
  },
  {
    path: "/profile",
    Component: ProfileScreen,
  },
]);