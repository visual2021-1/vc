import { getRenderer } from 'C:/Users/usuario/Desktop/vc/.codedoc/node_modules/@codedoc/core/dist/es5/transport/renderer.js';
import { initJssCs } from 'C:/Users/usuario/Desktop/vc/.codedoc/node_modules/@codedoc/core/dist/es5/transport/setup-jss.js';initJssCs();
import { installTheme } from 'C:/Users/usuario/Desktop/vc/.codedoc/content/theme.ts';installTheme();
import { zoomOnFormula } from 'C:/Users/usuario/Desktop/vc/.codedoc/node_modules/@codedoc/core/dist/es5/components/formula/zoom-on-formula.js';zoomOnFormula();
import { codeSelection } from 'C:/Users/usuario/Desktop/vc/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from 'C:/Users/usuario/Desktop/vc/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from 'C:/Users/usuario/Desktop/vc/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from 'C:/Users/usuario/Desktop/vc/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from 'C:/Users/usuario/Desktop/vc/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from 'C:/Users/usuario/Desktop/vc/.codedoc/node_modules/@codedoc/core/dist/es5/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from 'C:/Users/usuario/Desktop/vc/.codedoc/node_modules/@codedoc/core/dist/es5/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from 'C:/Users/usuario/Desktop/vc/.codedoc/node_modules/@codedoc/core/dist/es5/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from 'C:/Users/usuario/Desktop/vc/.codedoc/node_modules/@codedoc/core/dist/es5/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from 'C:/Users/usuario/Desktop/vc/.codedoc/node_modules/@codedoc/core/dist/es5/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from 'C:/Users/usuario/Desktop/vc/.codedoc/node_modules/@codedoc/core/dist/es5/components/page/toc/search/post-nav/index.js';postNavSearch();
import { copyLineLinks } from 'C:/Users/usuario/Desktop/vc/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/line-links/copy-line-link.js';copyLineLinks();
import { gatherFootnotes } from 'C:/Users/usuario/Desktop/vc/.codedoc/node_modules/@codedoc/core/dist/es5/components/footnote/gather-footnotes.js';gatherFootnotes();
import { reloadOnChange } from 'C:/Users/usuario/Desktop/vc/.codedoc/node_modules/@codedoc/core/dist/es5/serve/reload.js';reloadOnChange();
import { ToCPrevNext } from 'C:/Users/usuario/Desktop/vc/.codedoc/node_modules/@codedoc/core/dist/es5/components/page/toc/prevnext/index.js';
import { CollapseControl } from 'C:/Users/usuario/Desktop/vc/.codedoc/node_modules/@codedoc/core/dist/es5/components/collapse/collapse-control.js';
import { GithubSearch } from 'C:/Users/usuario/Desktop/vc/.codedoc/node_modules/@codedoc/core/dist/es5/components/misc/github/search.js';
import { ToCToggle } from 'C:/Users/usuario/Desktop/vc/.codedoc/node_modules/@codedoc/core/dist/es5/components/page/toc/toggle/index.js';
import { DarkModeSwitch } from 'C:/Users/usuario/Desktop/vc/.codedoc/node_modules/@codedoc/core/dist/es5/components/darkmode/index.js';
import { ConfigTransport } from 'C:/Users/usuario/Desktop/vc/.codedoc/node_modules/@codedoc/core/dist/es5/transport/config.js';

const components = {
  'pFw8bdwwjDSXiUpMpe5AGA==': ToCPrevNext,
  'FpycBB+5r7fL0XUvyj+pfA==': CollapseControl,
  '2OZYmSyqWM/JXeqSX2vz3w==': GithubSearch,
  'peOfyZtIkfMuVLwCFo2/1w==': ToCToggle,
  'rRtqGx4faablARIILy5Exg==': DarkModeSwitch,
  '3SmprlXjxrIZBLWoZy/Bew==': ConfigTransport
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
