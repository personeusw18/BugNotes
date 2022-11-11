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
    <nav className="bg-slate-900 h-24 pt-6">
      <ul className="gap-10 pl-12 pr-12">{props.children}</ul>
    </nav>
  )
}

function NavTitle(props: NavTitleProps) {
  return (
    <li className="font-cursive text-gray-300 text-5xl list-none hover:text-gray-400">
      <Link href={props.to}>{props.children}</Link>
    </li>
  )
}

function NavItem (props: NavItemProps) {
  return (
    <li className="font-cursive text-gray-300 text-3xl list-none underline hover:text-gray-400">
      <Link href={props.to}>{props.children}</Link>
    </li>
  )
}

export { NavBar, NavTitle, NavItem }