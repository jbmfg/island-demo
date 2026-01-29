// This script will be embedded to fix ALL links
const params = new URLSearchParams(window.location.search);
const user = params.get('user') || sessionStorage.getItem('cbguser') || 'chen';
if (params.get('user')) sessionStorage.setItem('cbguser', user);

// Fix ALL links on page load
window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a').forEach(link => {
        if (!link.href) return;
        const url = new URL(link.href, window.location.href);
        if (url.origin === window.location.origin && !url.hash && !url.searchParams.has('user')) {
            url.searchParams.set('user', user);
            link.href = url.toString();
        }
    });
});
