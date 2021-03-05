import Button from "./Button";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" />
      <Button color="red" text="Add 1" />
      <Button color="blue" text="Add 2" />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker!!!",
};

export default Header;
