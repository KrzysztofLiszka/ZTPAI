/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import AutoLink from '@ckeditor/ckeditor5-link/src/autolink.js';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code.js';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert.js';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';

class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
	AutoLink,
	Base64UploadAdapter,
	BlockQuote,
	Bold,
	Code,
	CodeBlock,
	Essentials,
	Heading,
	Image,
	ImageCaption,
	ImageInsert,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Italic,
	Link,
	List,
	Paragraph,
	Table,
	TableToolbar,
	TextTransformation
];

// Editor configuration.
Editor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'codeBlock',
			'bold',
			'italic',
			'bulletedList',
			'numberedList',
			'|',
			'insertTable',
			'undo',
			'redo'
		]
	},
	language: 'pl',
	image: {
		toolbar: [
			'imageTextAlternative',
			'toggleImageCaption',
			'imageStyle:inline',
			'imageStyle:block',
			'imageStyle:side'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	}
};

export default Editor;
