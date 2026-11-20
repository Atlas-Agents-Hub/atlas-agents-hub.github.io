// The organization root previously forwarded everything to Muse Hub.
// Keep bookmarks to Muse's section anchors and specialist selector working.
const museSections = new Set([
  '#top', '#roadmap', '#explore-muse', '#connect-automate', '#companion-spaces',
  '#specialists', '#toolkit', '#explore', '#setup',
]);
const query = new URLSearchParams(window.location.search);
if (query.has('role') || museSections.has(window.location.hash)) {
  window.location.replace('/muse-hub/' + window.location.search + window.location.hash);
}
