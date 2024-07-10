import { Outlet } from "react-router-dom"
import { SideNav } from "./side-nav"
import { TopBar } from "./top-bar"

export const Layout = () => {
  return (
    <div className="flex w-screen h-full">
      <SideNav />
      <div className="flex flex-col w-full bg-stone-100 h-full">
        <TopBar />
        <Outlet />
      </div>
    </div>
  )
}
