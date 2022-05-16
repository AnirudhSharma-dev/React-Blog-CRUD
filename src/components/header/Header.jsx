import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://wallup.net/wp-content/uploads/2017/03/29/477918-simple_background-nature.jpg"
        alt=""
      />
    </div>
  );
}
