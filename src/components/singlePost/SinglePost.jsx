import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://www.concept2.com/files/news/concept2_zoombkgrd_rowsunrise.jpg"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAurthor">
            Aurthor: <b>Anirudh</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
          dicta inventore laboriosam magni sit enim commodi? Reiciendis neque
          at, possimus dolore deserunt autem commodi, odit sequi nemo obcaecati
          adipisci nobis. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Voluptatibus dicta inventore laboriosam magni sit enim commodi?
          Reiciendis neque at, possimus dolore deserunt autem commodi, odit
          sequi nemo obcaecati adipisci nobis. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Voluptatibus dicta inventore laboriosam
          magni sit enim commodi? Reiciendis neque at, possimus dolore deserunt
          autem commodi, odit sequi nemo obcaecati adipisci nobis. Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Voluptatibus dicta
          inventore laboriosam magni sit enim commodi? Reiciendis neque at,
          possimus dolore deserunt autem commodi, odit sequi nemo obcaecati
          adipisci nobis. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Voluptatibus dicta inventore laboriosam magni sit enim commodi?
          Reiciendis neque at, possimus dolore deserunt autem commodi, odit
          sequi nemo obcaecati adipisci nobis. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Voluptatibus dicta inventore laboriosam
          magni sit enim commodi? Reiciendis neque at, possimus dolore deserunt
          autem commodi, odit sequi nemo obcaecati adipisci nobis.
        </p>
      </div>
    </div>
  );
}
