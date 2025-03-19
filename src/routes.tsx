import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/feed/Home";
import Groups from "./pages/groups/Groups";
import Friends from "./pages/friends/friends";
import Watch from "./pages/watch/Watch";
import Gaming from "./pages/gaming/Gaming";
import FriendLayout from "./components/layout/FriendsLayout";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/gaming" element={<Gaming />} />
        </Route>
        <Route path="/friends" element={<FriendLayout />}>
          <Route index element={<Friends />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
