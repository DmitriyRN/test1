System.register(["./chunk-vendor.js","./chunk-frameworks.js"],(function(e){"use strict";var t,o,s,d,a,r;return{setters:[function(e){t=e._,o=e.t,s=e.b,d=e.c},function(e){a=e.s,r=e.aI}],execute:function(){const{getItem:i,setItem:c}=a("localStorage"),n="code-button-default-tab";let h=e("G",class GetRepoElement extends HTMLElement{constructor(){super(...arguments),this.shouldRefreshList=!1}showDownloadMessage(e){const t=this.findPlatform(e);t&&this.showPlatform(t)}showCodespaces(e){const t=this.findPlatform(e);t&&(this.showPlatform(t),this.loadAndUpdateContent())}showCodespaceSelector(e){const t=this.findPlatform(e);t&&(this.showPlatform(t),this.codespaceSelector&&(this.codespaceSelector.hidden=!1))}showOpenOrCreateInCodespace(){this.openOrCreateInCodespace&&(this.openOrCreateInCodespace.hidden=!1)}removeOpenOrCreateInCodespace(){this.openOrCreateInCodespace&&this.openOrCreateInCodespace.remove()}refreshList(){this.shouldRefreshList&&(this.shouldRefreshList=!1,this.loadAndUpdateContent())}trackDelete(){this.shouldRefreshList=!0}hideSpinner(){this.codespaceLoadingMenu&&(this.codespaceLoadingMenu.hidden=!0),this.codespaceList&&(this.codespaceList.hidden=!1)}showSpinner(){this.codespaceLoadingMenu&&(this.codespaceLoadingMenu.hidden=!1),this.codespaceList&&(this.codespaceList.hidden=!0)}onDetailsToggle(e){this.modal.hidden=!1;for(const o of this.platforms)o.hidden=!0;const t=e.target;t&&t.open&&this.selectDefaultTab()}showPlatform(e){this.modal.hidden=!0;for(const t of this.platforms)t.hidden=t.getAttribute("data-platform")!==e}findPlatform(e){return e.currentTarget.getAttribute("data-open-app")||r()}refreshOnError(){window.location.reload()}pollForVscode(e){this.showPlatform("vscode");const t=e.currentTarget.getAttribute("data-src");t&&this.vscodePoller.setAttribute("src",t)}backToCodespacesFromVscodePolling(){this.loadAndUpdateContent(),this.showPlatform("codespaces")}localTabSelected(){c(n,"local")}cloudTabSelected(){c(n,"cloud")}selectDefaultTab(){const e=i(n);if(!e)return;const t=this.querySelector(`button[data-tab="${e}"`);t&&t.click()}loadAndUpdateContent(){this.codespaceList.setAttribute("src",this.codespaceList.getAttribute("data-src"))}});t([o],h.prototype,"modal",void 0),t([o],h.prototype,"codespaceForm",void 0),t([o],h.prototype,"codespaceLoadingMenu",void 0),t([o],h.prototype,"codespaceList",void 0),t([o],h.prototype,"codespaceSelector",void 0),t([o],h.prototype,"openOrCreateInCodespace",void 0),t([o],h.prototype,"vscodePoller",void 0),t([s],h.prototype,"platforms",void 0),h=e("G",t([d],h))}}}));
//# sourceMappingURL=chunk-get-repo-element-4fc5d189.js.map
