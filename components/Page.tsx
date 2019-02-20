import Components from "./index";
import { SbEditableContent } from "storyblok-react";

const Page: React.FC<SbEditableContent> = (props) => (
    <div>
        {props.content.body.map((blok: SbEditableContent) =>
            Components(blok),
        )}
    </div>
);

export default Page;
