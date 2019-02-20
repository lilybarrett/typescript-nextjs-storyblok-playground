import SbEditable, { SbEditableContent } from "storyblok-react";
import styled from "@emotion/styled";

const SlideImage = styled("img")`
    width: 100%;
    height: 20em;
`;

type Props = {
    content: SbEditableContent,
};

const Slide: React.FC<Props> = ({ content }) => (
    <SbEditable content={content}>
        <div>
            <SlideImage src={content.image} />
            <p>{content.name}</p>
            <p>{content.date}</p>
        </div>
    </SbEditable>
);

export default Slide;
