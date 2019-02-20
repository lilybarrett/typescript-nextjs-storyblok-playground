import React from "react";
import Components from "../components/index";
import StoryblokService from "../client/storyblok-service";
import { SbEditableContent } from "storyblok-react";
import Layout from "../components/Layout";
import { NextContext } from "next";
import styled from "@emotion/styled";

export const Header = styled("h1")({
    color: "red",
    textAlign: "left",
    fontSize: "30px",
});

type State = {
    pageContent: SbEditableContent;
};

class HomePage extends React.Component<{}, State> {
    public static async getInitialProps ({ query }: NextContext) {
        StoryblokService.setQuery(query);

        return {
            page: await StoryblokService.get("cdn/stories/"),
        };
    }
    constructor (props: any) {
        super(props);
        this.state = { pageContent: props.page.data.stories[0].content };
    }

    public componentDidMount () {
        StoryblokService.initEditor(this);
    }

    public render () {
        return (
            <Layout>
                <Header>
                    {Components(this.state.pageContent)}
                </Header>
            </Layout>
        );
    }
}

export default HomePage;
