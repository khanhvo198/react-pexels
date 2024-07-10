import { NavLink } from "react-router-dom"

export const SideNav = () => {

  return (
    <div className="w-[15%] h-screen">
      <div className="p-4">
        <div className="font-bold text-2xl w-full">Image Gallery</div>
        <div className="flex flex-col pt-2">
          <NavLink to="/" className={({ isActive }) => {
            return [isActive ? 'text-blue-500' : '', 'text-decoration-none', 'text-xl'].join(" ")
          }}> Home </NavLink>

          <NavLink to="/random" className={({ isActive }) => {
            return [isActive ? 'text-blue-500' : '', 'text-decoration-none', 'text-xl'].join(" ")
          }}> Random photos </NavLink>
        </div>
      </div>
    </div>
  )
}
