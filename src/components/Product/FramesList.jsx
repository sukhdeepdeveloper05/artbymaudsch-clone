const framesImages = [
  {
    title: "Rolled Canvas",
    image:
      "https://artbymaudsch.com/cdn/shop/t/183/assets/rolled-canvas.jpg?v=2375308735647284791715878042",
  },
  {
    title: "Gallery Wrap",
    image:
      "https://artbymaudsch.com/cdn/shop/t/183/assets/gallery-wrap.jpg?v=101473750469264698771715878042",
  },
  {
    title: "White",
    image:
      "https://artbymaudsch.com/cdn/shop/t/183/assets/white.jpg?v=27652113142049982791715878042",
  },
  {
    title: "Black",
    image:
      "https://artbymaudsch.com/cdn/shop/t/183/assets/black.jpg?v=98962567022303084441715878042",
  },
  {
    title: "Black&Silver",
    image:
      "https://artbymaudsch.com/cdn/shop/t/183/assets/black-silver.jpg?v=26185944352997682201715878042",
  },
  {
    title: "Black&Gold",
    image:
      "https://artbymaudsch.com/cdn/shop/t/183/assets/black-gold.jpg?v=51727167199189487871715878042",
  },
];

export default function FramesList({
  frames,
  classes,
  activeFrame,
  setActiveFrame,
}) {
  return (
    <ul className={classes["frame-list"]}>
      {frames.map((frame, i) => {
        return (
          <li
            key={frame}
            className={`${classes["frame-list-item"]} ${
              activeFrame === frame ? classes["active"] : ""
            }`}
            onClick={() => setActiveFrame(frame)}
            style={{ backgroundImage: `url("${framesImages[i].image}")` }}
          >
            {frame}
          </li>
        );
      })}
    </ul>
  );
}
