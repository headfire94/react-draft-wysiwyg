/* @flow */

import React from 'react';
import { Editor } from '../../src';
import PrettyInput from '../../src/controls/Link/Component/PrettyInput';

const Basic = () => (
  <div className="rdw-storybook-root">
    <PrettyInput placeholder="test" />
    <Editor
      localization={{
        locale: 'ru'
      }}
      toolbarClassName="rdw-storybook-toolbar"
      wrapperClassName="rdw-storybook-wrapper"
      label="label"
      editorClassName="rdw-storybook-editor"
      toolbar={{
        options: ['inline', 'blockType', 'fontSize', 'fontFamily'],
        inline: {
          options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace'],
          bold: { className: 'bordered-option-classname' },
          italic: { className: 'bordered-option-classname' },
          underline: { className: 'bordered-option-classname' },
          strikethrough: { className: 'bordered-option-classname' },
          code: { className: 'bordered-option-classname' },
        },
        blockType: {
          inDropdown: false,
        },
        fontSize: {
          className: 'bordered-option-classname',
        },
        fontFamily: {
          className: 'bordered-option-classname',
        },
      }}
    />
  </div>
);

export default Basic;
