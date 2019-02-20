import Components from "./index";
import SbEditable, { SbEditableContent } from "storyblok-react";

import styled from "@emotion/styled";

const Wrapper = styled("div")`
  display: flex;
  flex: 1;
`;

type Props = {
  content: SbEditableContent;
};

const Grid = (props: Props) => (
  <SbEditable content="props.content">
    <Wrapper>
      {props.content.columns.map((blok) =>
        Components(blok),
      )}
    </Wrapper>
  </SbEditable>
);

export default Grid;
