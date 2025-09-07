/**
 * Example: Server-side theme detection for Blue Design System
 * 
 * This demonstrates how to read the theme cookie server-side
 * and inject the appropriate data-theme attribute to prevent FOUC
 */

// Node.js/Express example
function getThemeFromCookies(req) {
    const cookies = req.headers.cookie;
    if (!cookies) return null;
    
    const themeMatch = cookies.match(/blue-theme=([^;]+)/);
    return themeMatch ? themeMatch[1] : null;
}

function injectThemeIntoHTML(html, theme) {
    // Default to system preference if no theme is set
    if (!theme) {
        // Let CSS handle system preference
        return html;
    }
    
    // Inject theme attribute into HTML tag
    return html.replace(
        /<html([^>]*)>/i,
        `<html$1 data-theme="${theme}">`
    );
}

// Express middleware example
function themeMiddleware(req, res, next) {
    const theme = getThemeFromCookies(req);
    req.theme = theme;
    
    // Store original res.send
    const originalSend = res.send;
    
    // Override res.send to inject theme
    res.send = function(body) {
        if (typeof body === 'string' && body.includes('<html')) {
            body = injectThemeIntoHTML(body, theme);
        }
        originalSend.call(this, body);
    };
    
    next();
}

// Usage in Express app:
// app.use(themeMiddleware);

// PHP example
/*
<?php
function getThemeFromCookies() {
    return isset($_COOKIE['blue-theme']) ? $_COOKIE['blue-theme'] : null;
}

function renderHTML($theme = null) {
    $themeAttr = $theme ? " data-theme=\"$theme\"" : "";
    return "<!DOCTYPE html><html$themeAttr>...";
}

$theme = getThemeFromCookies();
echo renderHTML($theme);
?>
*/

// Next.js example
/*
// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const theme = ctx.req?.headers?.cookie?.match(/blue-theme=([^;]+)/)?.[1] || null;
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, theme };
  }

  render() {
    const { theme } = this.props;
    return (
      <Html data-theme={theme}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
*/

module.exports = {
    getThemeFromCookies,
    injectThemeIntoHTML,
    themeMiddleware
};