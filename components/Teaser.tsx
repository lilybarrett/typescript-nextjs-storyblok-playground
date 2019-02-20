import SbEditable from "storyblok-react";
import React from "react";

class Teaser extends React.Component {
  public render () {
    return (
      <SbEditable content={this.props.content}>
        <div>
          Hello world!
        </div>
      </SbEditable>
    );
  }
}

export default Teaser;
