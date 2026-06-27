# VitaDash

> **Reviving the web experience on PlayStation Vita.**

VitaDash is a lightweight dashboard designed specifically for the PlayStation Vita browser.

Instead of trying to make the modern web work on legacy hardware, VitaDash embraces the limitations of the Vita browser and delivers useful, relevant content through simple, lightweight, and highly compatible web pages.

---

# Why?

After years of not using my PS Vita, I decided to browse the web from the console again.

The experience was... disappointing.

Most websites no longer load correctly, rely on unsupported JavaScript features, require newer TLS versions, or have become simply too heavy for the Vita's browser.

Rather than trying to "fix" the browser, I thought:

> *What if the web came to the Vita instead?*

That idea became VitaDash.

Instead of visiting dozens of incompatible websites, VitaDash provides a single homepage where Vita users can quickly access the information they actually care about.

---

# Vision

VitaDash is more than a homepage.

It is the first step toward a collection of lightweight dashboards designed for legacy browsers and older gaming platforms.

The PlayStation Vita is only the beginning.

Future dashboards may target other platforms such as the PlayStation 3, PlayStation Portable, or other devices whose browsers have been left behind by the modern web.

The long-term goal is to build an ecosystem that is:

* Lightweight
* Fast
* Open source
* Easy to self-host
* Easy to customize
* Friendly to legacy browsers

---

# Features

## Current

* Lightweight landing page
* Quick access to useful websites
* Designed for the PlayStation Vita browser
* GitHub Pages compatible

## Planned

* RSS-powered news feeds
* PS Vita scene updates
* Gaming news
* Blog integration
* Custom bookmarks
* Lightweight search
* Additional utilities
* User-configurable dashboard

---

# Project Principles

The following principles guide every design decision made in VitaDash.

## Every Feature Must Justify Its Weight

Every new feature, dependency, image, stylesheet, or script should provide clear value to PS Vita users.

Before adding anything, ask:

* Does this improve the experience on the Vita?
* Is there a simpler solution?
* Is the added complexity worth the benefit?

If the answer is "no," it probably doesn't belong in VitaDash.

---

## Compatibility First

The PlayStation Vita browser is the primary target.

New features should work on the Vita before they work anywhere else.

---

## Keep It Lightweight

Performance matters.

Whenever practical, the homepage should remain under **100 KB** (excluding feed data).

---

## Progressive Enhancement

Core functionality should never depend on modern browser features.

If newer technologies are introduced, they should enhance the experience without breaking compatibility.

---

## Minimal Dependencies

Avoid frameworks whenever possible.

HTML, CSS, and vanilla JavaScript should be enough for most features.

---

## Fast Before Fancy

Performance is more important than animations, visual effects, or unnecessary UI complexity.

---

## Graceful Degradation

If a browser cannot support a feature, the dashboard should continue to function instead of failing entirely.

---

## Open and Maintainable

Readable code is better than clever code.

The project should remain approachable for contributors of all skill levels.

---

## Community Driven

VitaDash is designed to be forked.

Users should be able to customize the dashboard with their own bookmarks, RSS feeds, blogs, and services without needing to rewrite the project.

The goal is to provide a solid foundation that anyone can adapt to their own interests.

---

# Technical Guidelines

As a general rule, VitaDash favors technologies with broad browser support.

* HTML5 with legacy-friendly markup
* CSS2.1 and widely supported CSS3 features
* Vanilla JavaScript (ES5-compatible whenever possible)
* No JavaScript frameworks
* No mandatory external CDNs
* Static hosting through GitHub Pages
* Feed generation through GitHub Actions

---

# Roadmap

## Version 0.1

* Initial landing page
* Static bookmarks
* GitHub Pages deployment

## Version 0.2

* Automatic RSS feed processing
* Blog integration
* Scene news

## Version 0.3

* Customizable bookmarks
* Additional feeds
* Better navigation

## Future

* Offline-friendly pages
* Multiple themes
* User configuration
* Additional dashboard utilities
* Platform-specific dashboard variants

---

# Contributing

Ideas, bug reports, feature requests, and pull requests are always welcome.

Whether you're interested in improving compatibility, optimizing performance, adding useful features, or supporting another legacy platform, your contribution is appreciated.

---

# License

A license will be added before the first stable release.

---

**Built with ❤️ for the PlayStation Vita community.**
