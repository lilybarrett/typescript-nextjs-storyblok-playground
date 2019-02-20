import SbEditable, { SbEditableContent } from "storyblok-react";
import React from "react";
import Components from "./index";
import styled from "@emotion/styled";

type Props = {
    content: SbEditableContent,
};

type State = {
    currentSlideIndex: number,
};

const Wrapper = styled("div")`
    width: 100%;
    text-align: center;
    margin: 30px 0;
`;

const SlideButton = styled("div")`
    text-indent: -9999px;
    border: 0;
    border-radius: 50%;
    width: 17px;
    display: inline-block;
    height: 17px;
    padding: 0;
    margin: 5px 6px;
    background-color: ${(props: any) => props.isCurrentSlide ? `#ccc` : `#000`};
    -webkit-appearance: none;
    cursor: pointer;
`;

class Teaser extends React.Component<Props, State> {
    constructor (props: Props) {
        super(props);
        this.state = { currentSlideIndex: 0 };
    }

    public slide () {
        const slides = this.props.content.body.filter((slide: SbEditableContent, index: number) => {
            return this.state.currentSlideIndex === index;
        });
        if (slides.length) {
            return slides[0];
        }
        return null;
    }

    public handleDotClick (index: number) {
        this.setState({
            currentSlideIndex: index,
        });
    }

    public render () {
        return (
            <SbEditable content={this.props.content}>
                <div className="teaser">
                    {this.slide() ? Components(this.slide()) : ""}
                    <Wrapper>
                    {this.props.content.body.map((blok: SbEditableContent, index: number) =>
                        <SlideButton
                            key={index}
                            onClick={() => this.handleDotClick(index)}
                            isCurrentSlide={index === this.state.currentSlideIndex}
                        />,
                    )}
                    </Wrapper>
                </div>
            </SbEditable>
        );
    }
}

export default Teaser;
