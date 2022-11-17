import "./../fonts.css"
import { Link } from "wouter"
import PreviousMap from "postcss/lib/previous-map"

interface NavBarProps {
  children?: React.ReactNode;
}

interface NavTitleProps {
  to: string;
  children?: React.ReactNode;
}

interface NavItemProps {
  to: string;
  children?: React.ReactNode;
}


function NavBar (props: NavBarProps) {
  return (
    <nav id="navbar" className="shadow-xl bg-slate-900 flex h-24 min-h-[6rem] justify-between items-center pl-8 md:pl-16 lg:pl-20 pr-8 md:pr-16 lg:pr-20">
      { props.children }
    </nav>
  )
}

function NavTitle(props: NavTitleProps) {
  return (
    <div className="text-3xl  lg:text-5xl font-cursive text-gray-300 hover:text-gray-400 relative group">
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-400 transition-all group-hover:w-full"></span>
      <Link href={props.to}>{props.children}</Link>
    </div>
  )
}

function NavItem (props: NavItemProps) {
  return (
    <li className="font-cursive text-gray-300 text-xl lg:text-3xl hover:text-gray-400 relative group">
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-400 transition-all group-hover:w-full"></span>
      <Link href={props.to}>{props.children}</Link>
    </li>
  )
}

export { NavBar, NavTitle, NavItem }