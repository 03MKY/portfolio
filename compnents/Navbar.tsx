export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10">
      <h1 className="font-semibold">Mohit 👋</h1>
      <ul className="flex gap-4">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
