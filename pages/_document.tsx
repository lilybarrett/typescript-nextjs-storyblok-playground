import Document, { Main, NextScript } from "next/document";
import StoryblokService from "../client/storyblok-service";
import NextHead from "../components/Head";
import React from "react";

export default class MyDocument extends Document {
    public render () {
        return (
            <html>
                <NextHead>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                    <link rel="stylesheet" href="/static/reset.css" />
                    <link rel="stylesheet" href="/static/bootstrap-grid.css" />
                    <link href="https://use.fontawesome.com/releases/v5.0.2/css/all.css" rel="stylesheet"/>
                    <script dangerouslySetInnerHTML={{__html: `var StoryblokCacheVersion = '${StoryblokService.getCacheVersion()}';` }} />
                </NextHead>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </html>
        );
    }
}
