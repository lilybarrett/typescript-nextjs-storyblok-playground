import React from "react";
import Teaser from "./Teaser";
import Feature from "./Feature";
import Page from "./Page";
import Grid from "./Grid";
import { SbEditableContent } from "storyblok-react";
import Slide from "./Slide";

type ComponentType = {
    [index: string]: any;
};

const Components: ComponentType = {
    teaser: Teaser,
    feature: Feature,
    page: Page,
    slide: Slide,
    grid: Grid,
};

const Blok = (blok: SbEditableContent) => {
    if (typeof Components[blok.component] !== "undefined") {
        return React.createElement(
            Components[blok.component],
            {
                key: blok._uid,
                content: blok,
            },
        );
    }
    return React.createElement(() => (
        <div>The component {blok.component} has not been created yet.</div>
    ), { key: blok._uid });
};

export default Blok;
