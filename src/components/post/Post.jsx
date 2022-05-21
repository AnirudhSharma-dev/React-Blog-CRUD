import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://www.concept2.com/files/news/concept2_zoombkgrd_rowsunrise.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Lifestyle</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
        similique atque molestias, quidem cupiditate, blanditiis iure, ratione
        pariatur deserunt quaerat perferendis in aspernatur. Sunt laudantium
        vitae molestiae sapiente dolores est? Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Laborum similique atque molestias, quidem
        cupiditate, blanditiis iure, ratione pariatur deserunt quaerat
        perferendis in aspernatur. Sunt laudantium vitae molestiae sapiente
        dolores est? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Laborum similique atque molestias, quidem cupiditate, blanditiis iure,
        ratione pariatur deserunt quaerat perferendis in aspernatur. Sunt
        laudantium vitae molestiae sapiente dolores est? Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Laborum similique atque molestias,
        quidem cupiditate, blanditiis iure, ratione pariatur deserunt quaerat
        perferendis in aspernatur. Sunt laudantium vitae molestiae sapiente
        dolores est?
      </p>
    </div>
  );
}
