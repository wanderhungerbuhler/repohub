import { Routes, Route } from "react-router-dom";

import { Home } from "../components/Home";
import { User } from "../components/User";

export function Router() {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/user/:name" element={<User />} />
    </Routes>
  )
}
