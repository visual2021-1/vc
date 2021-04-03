import { getRenderer } from 'C:/Users/Elsa/Desktop/2021-I/Visual/vc/.codedoc/node_modules/@codedoc/core/dist/es5/transport/renderer.js';
import { initJssCs } from 'C:/Users/Elsa/Desktop/2021-I/Visual/vc/.codedoc/node_modules/@codedoc/core/dist/es5/transport/setup-jss.js';initJssCs();
import { installTheme } from 'C:/Users/Elsa/Desktop/2021-I/Visual/vc/.codedoc/content/theme.ts';installTheme();
import { zoomOnFormula } from 'C:/Users/Elsa/Desktop/2021-I/Visual/vc/.codedoc/node_modules/@codedoc/core/dist/es5/components/formula/zoom-on-formula.js';zoomOnFormula();
import { codeSelection } from 'C:/Users/Elsa/Desktop/2021-I/Visual/vc/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from 'C:/Users/Elsa/Desktop/2021-I/Visual/vc/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from 'C:/Users/Elsa/Desktop/2021-I/Visual/vc/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from 'C:/Users/Elsa/Desktop/2021-I/Visual/vc/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from 'C:/Users/Elsa/Desktop/2021-I/Visual/vc/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from 'C:/Users/Elsa/Desktop/2021-I/Visual/vc/.codedoc/node_modules/@codedoc/core/dist/es5/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from 'C:/Users/Elsa/Desktop/2021-I/Visual/vc/.codedoc/node_modules/@codedoc/core/dist/es5/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from 'C:/Users/Elsa/Desktop/2021-I/Visual/vc/.codedoc/node_modules/@codedoc/core/dist/es5/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from 'C:/Users/Elsa/Desktop/2021-I/Visual/vc/.codedoc/node_modules/@codedoc/core/dist/es5/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from 'C:/Users/Elsa/Desktop/2021-I/Visual/vc/.codedoc/node_modules/@codedoc/core/dist/es5/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from 'C:/Users/Elsa/Desktop/2021-I/Visual/vc/.codedoc/node_modules/@codedoc/core/dist/es5/components/page/toc/search/post-nav/index.js';postNavSearch();
import { copyLineLinks } from 'C:/Users/Elsa/Desktop/2021-I/Visual/vc/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/line-links/copy-line-link.js';copyLineLinks();
import { gatherFootnotes } from 'C:/Users/Elsa/Desktop/2021-I/Visual/vc/.codedoc/node_modules/@codedoc/core/dist/es5/components/footnote/gather-footnotes.js';gatherFootnotes();
import { reloadOnChange } from 'C:/Users/Elsa/Desktop/2021-I/Visual/vc/.codedoc/node_modules/@codedoc/core/dist/es5/serve/reload.js';reloadOnChange();
import { ToCPrevNext } from 'C:/Users/Elsa/Desktop/2021-I/Visual/vc/.codedoc/node_modules/@codedoc/core/dist/es5/components/page/toc/prevnext/index.js';
import { CollapseControl } from 'C:/Users/Elsa/Desktop/2021-I/Visual/vc/.codedoc/node_modules/@codedoc/core/dist/es5/components/collapse/collapse-control.js';
import { GithubSearch } from 'C:/Users/Elsa/Desktop/2021-I/Visual/vc/.codedoc/node_modules/@codedoc/core/dist/es5/components/misc/github/search.js';
import { ToCToggle } from 'C:/Users/Elsa/Desktop/2021-I/Visual/vc/.codedoc/node_modules/@codedoc/core/dist/es5/components/page/toc/toggle/index.js';
import { DarkModeSwitch } from 'C:/Users/Elsa/Desktop/2021-I/Visual/vc/.codedoc/node_modules/@codedoc/core/dist/es5/components/darkmode/index.js';
import { ConfigTransport } from 'C:/Users/Elsa/Desktop/2021-I/Visual/vc/.codedoc/node_modules/@codedoc/core/dist/es5/transport/config.js';

const components = {
  'XVg/8ECgZgzqM5+uIUZZ0g==': ToCPrevNext,
  'YIEX94b6r44viQxdGyjZMQ==': CollapseControl,
  'TZ6dxNoB8ljQXkCTkMsgyg==': GithubSearch,
  'OU82HbfwfbDbTYSUvxQItQ==': ToCToggle,
  '922xl5o03SMMAnHKJE5y3Q==': DarkModeSwitch,
  'JzECnld0ph/riCq2Bxx5cw==': ConfigTransport
};

const renderer = getRenderer();
const ogtransport = window.__sdh_transport;
window.__sdh_transport = function(id, hash, props) {
  if (hash in components) {
    const target = document.getElementById(id);
    renderer.render(renderer.create(components[hash], props)).after(target);
    target.remove();
  }
  else if (ogtransport) ogtransport(id, hash, props);
}
