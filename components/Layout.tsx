import React from "react";
import StoryblokService from "../client/storyblok-service";
import styled from "@emotion/styled";

const Container = styled("div")`
    max-width: 75rem;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
`;

const Layout: React.FC = (props) => (
    <>
        <Container>
            {props.children}
        </Container>
        {StoryblokService.bridge()}
    </>
);

export default Layout;
