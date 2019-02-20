import StoryblokClient from "storyblok-js-client";

class StoryblokService {
    public devMode: boolean; // Always loads draft
    public token: string;
    public client: StoryblokClient;
    public query: any;
    constructor () {
        this.devMode = false;
        this.token = "k0reYOcwE7PuthhRY58TKAtt";
        this.client = new StoryblokClient({
            accessToken: this.token,
            cache: {
                clear: "auto",
                type: "memory",
            },
        });

        this.query = {};
    }

    public getCacheVersion () {
        return this.client.cacheVersion;
    }

    public get (slug: string, params?: any) {
        params = params || {};

        if (this.getQuery("_storyblok") || this.devMode || (typeof window !== "undefined" && window.storyblok)) {
            params.version = "draft";
        }

        if (typeof window !== "undefined" && typeof window.StoryblokCacheVersion !== "undefined") {
            params.cv = window.StoryblokCacheVersion;
        }

        return this.client.get(slug, params);
    }

    public initEditor (reactComponent: any) {
        if (window.storyblok) {
            window.storyblok.init();
            window.storyblok.on(["change", "published"], () => location.reload(true));
            window.storyblok.on("input", (event: any) => {
                if (event.story.content._uid === reactComponent.state.pageContent._uid) {
                    reactComponent.setState({
                        pageContent: window.storyblok.addComments(event.story.content, event.story.id),
                    });
                }
            });
        }
    }

    public setQuery (query: any) {
        this.query = query;
    }

    public getQuery (param: string) {
        return this.query[param];
    }

    public bridge () {
        if (!this.getQuery("_storyblok") && !this.devMode) {
            return "";
        }
        return (<script src={"//app.storyblok.com/f/storyblok-latest.js?t=" + this.token}></script>);
    }
}

const storyblokInstance = new StoryblokService();

export default storyblokInstance;
