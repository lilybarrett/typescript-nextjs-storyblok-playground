import SbEditable, { SbEditableContent } from "storyblok-react";
import styled from "@emotion/styled";

const SlideImage = styled("img")`
    width: 100%;
    height: 20em;
`;

type Props = {
    content: SbEditableContent,
};

const Slide: React.FC<Props> = (props) => (
    <SbEditable content={props.content}>
        <div>
            <SlideImage src={props.content.image} />
        </div>
    </SbEditable>
);

export default Slide;
