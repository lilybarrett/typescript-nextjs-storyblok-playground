import NextHead from "next/head";

type Props = {
    title?: string;
    description?: string;
};

const Head: React.FC<Props> = (props) => (
    <NextHead>
        <meta charSet="UTF-8" />
        <title>{props.title || ""}</title>
        <meta name="description" content={props.description || ""} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Zilla+Slab:400,700" />
    </NextHead>
);

export default Head;
