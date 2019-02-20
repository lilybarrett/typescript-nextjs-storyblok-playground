import Components from "./index";

const Page = (props) => (
  <div>
    {props.content.body.map((blok) =>
      Components(blok),
    )}
  </div>
);

export default Page;
