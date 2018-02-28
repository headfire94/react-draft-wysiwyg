/* @flow */

import React from "react";
import { Editor } from "../../src";
import PrettyInput from "../../src/controls/Link/Component/PrettyInput";

const Basic = () => (
  <div className="rdw-storybook-root">
    <PrettyInput placeholder="test" />
    <Editor
      toolbarClassName="rdw-storybook-toolbar"
      wrapperClassName="rdw-storybook-wrapper"
      label="label"
      editorClassName="rdw-storybook-editor"
    />
  </div>
);

export default Basic;
