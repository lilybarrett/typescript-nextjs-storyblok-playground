import React from "react";
import SbEditable, { SbEditableContent } from "storyblok-react";
import styled from "@emotion/styled";

const Wrapper = styled("div")`
    display: flex;
    flex: 1;
`;

type Props = {
    content: SbEditableContent;
};

class Feature extends React.Component<Props, {}> {
    public render () {
        return (
            <SbEditable content={this.props.content}>
                <Wrapper>
                    <h2>{this.props.content.name}</h2>
                </Wrapper>
            </SbEditable>
        );
    }
}

export default Feature;
