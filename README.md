# Button Icon Creator

button-icon-creator-app is a [VTEX] app for creating button icons for store theme.

## Installation

Use the [vtex install](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-vtex-io-cli-install)  package manager to install button-icon-creator.

```bash
vtex install echidna.button-icon-creator@0.0.1
```

## Concept

This project is based on [SVG fragment identifiers](https://css-tricks.com/svg-fragment-identifiers-work/). All store icons are served by Render SDK, and with HTML tag `<use>` we can render a fragment from our icon pack. If you want to know the complete list of fragment SVG's, [see here](https://github.com/vtex-apps/store-icons/blob/master/docs/ICONPACK.md)

## Usage

First of all, add into the dependencies of your `manifest.json` and use it as an npm module:

```json
"dependencies": {
  "echidna.button-icon-creator": "0.x"
}
```

There are two different ways to use the icons available here. If you're developing a store's theme, you should use the `button-icon-creator` block for the icon you want to render, which behaves just like any other block and expects to receive the props exposed by its [API](#props). But if you're developing custom components and want to use icons defined here, just follow the instructions below.


### Generic Icon

The API provides a generic icon, The `button-icon-creator` component. You can choose from any other icon passing only the `id` from the respective one you want to add.

For example:

```js
 "button-icon-creator#IconEchidna": {
   "props": {
     "id": "bnd-echidna",
     "link": "https://echidna.co/",
     "size": "60",
     "viewBox": "0, 0, 400,180.5383022774327",
     "isActive": true,
     "activeClassName": "blue",
     "mutedClassName": "gray",
     "blockClass": "button-icon"
   }
 },
```

⚠️ This component is meant to be used on icons there aren't common throughout the store. Choose [`dedicated`](#dedicated-icon) components whenever possible.

## button-icon-creator

### Props

Any icon can receive the following props:

| Property        | Description                                | Type      | Default value |
| --------------- | ------------------------------------------ | --------- | ------------- |
| id              | The ID for the desired icon                | `String`  | ''            |
| link            | The link to be open onclick of button icon | `String`  | ''            |
| size            | Desired size                               | `Number`  | 16            |
| viewbox         | Desired viewbox                            | `Number`  | "0, 0, 20, 20"|
| isActive        | desc                                       | `Boolean` | true          |
| activeClassName | The className it should have if active     | `String`  | 🚫            |
| mutedClassName  | The className it should have if not active | `String`  | 🚫            |
| blockClass      | The BlockClassName for css handle          | `String`  | 🚫            |

### SVG Prefixes 

We use a series of prefixes to help us understand what an specific icon means. 

* bnd - Brand;
* hpa - High Priority Actions;
* mpa - Midle Priority Actions;
* sti - Status Indicator;
* inf - Informative;
* nav - Navigation
  

### ID props value

| Icon                                    | ID                         |
| --------------------------------------- | -------------------------- |
| ![](./bnd-echidna.svg)  | bnd-echidna | 
| ![](./bnd-facebook.svg)  | bnd-facebook | 
| ![](./bnd-youtube.svg)  | bnd-youtube | 
| ![](./bnd-instagram.svg)  | bnd-instagram | 
| ![](./bnd-whatsapp.svg)  | bnd-whatsapp | 
| ![](./bnd-amazonpay.svg)  | bnd-amazonpay | 
| ![](./bnd-paypal.svg)  | bnd-paypal | 
| ![](./bnd-gpay.svg)  | bnd-gpay | 
| ![](./bnd-applepay.svg)  | bnd-applepay | 
| ![](./bnd-twitter.svg)  | bnd-twitter | 
| ![](./mpa-expand.svg)  | mpa-expand | 
| ![](./hpa-arrow-back.svg)  | hpa-arrow-back | 
| ![](./hpa-arrow-from-bottom.svg)  | hpa-arrow-from-bottom | 
| ![](./hpa-arrow-to-bottom.svg)  | hpa-arrow-to-bottom | 
| ![](./hpa-calendar.svg)  | hpa-calendar | 
| ![](./hpa-cart.svg)  | hpa-cart | 
| ![](./hpa-delete.svg)  | hpa-delete | 
| ![](./hpa-hamburguer-menu.svg)  | hpa-hamburguer-menu | 
| ![](./hpa-location-marker.svg)  | hpa-location-marker | 
| ![](./hpa-play.svg)  | hpa-play | 
| ![](./hpa-profile.svg)  | hpa-profile | 
| ![](./hpa-save.svg)  | hpa-save | 
| ![](./hpa-search.svg)  | hpa-search | 
| ![](./hpa-telemarketing.svg)  | hpa-telemarketing | 
| ![](./inf-help--filled.svg)  | inf-help--filled | 
| ![](./inf-help--outline.svg)  | inf-help--outline | 
| ![](./inf-star.svg)  | inf-star | 
| ![](./inf-tooltip--filled.svg)  | inf-tooltip--filled | 
| ![](./inf-tooltip--outline.svg)  | inf-tooltip--outline | 
| ![](./inf-warning--filled.svg)  | inf-warning--filled | 
| ![](./inf-warning--outline.svg)  | inf-warning--outline | 
| ![](./mpa-angle--down.svg)  | mpa-angle--down | 
| ![](./mpa-angle--up.svg)  | mpa-angle--up | 
| ![](./mpa-arrows.svg)  | mpa-arrows | 
| ![](./mpa-bag.svg)  | mpa-bag | 
| ![](./mpa-bars.svg)  | mpa-bars | 
| ![](./mpa-bookmark--filled.svg)  | mpa-bookmark--filled | 
| ![](./mpa-bookmark--outline.svg)  | mpa-bookmark--outline | 
| ![](./mpa-clone--filled.svg)  | mpa-clone--filled | 
| ![](./mpa-clone--outline.svg)  | mpa-clone--outline | 
| ![](./mpa-cog.svg)  | mpa-cog | 
| ![](./mpa-columns.svg)  | mpa-columns | 
| ![](./mpa-credit-card.svg)  | mpa-credit-card | 
| ![](./mpa-edit--filled.svg)  | mpa-edit--filled | 
| ![](./mpa-edit--outline.svg)  | mpa-edit--outline | 
| ![](./mpa-elypsis.svg)  | mpa-elypsis | 
| ![](./mpa-exchange.svg)  | mpa-exchange | 
| ![](./mpa-export.svg)  | mpa-export | 
| ![](./mpa-external-link--line.svg)  | mpa-external-link--line | 
| ![](./mpa-external-link--outline.svg)  | mpa-external-link--outline | 
| ![](./mpa-eyesight--filled--off.svg)  | mpa-eyesight--filled--off | 
| ![](./mpa-eyesight--filled--on.svg)  | mpa-eyesight--filled--on | 
| ![](./mpa-eyesight--outline--off.svg)  | mpa-eyesight--outline--off | 
| ![](./mpa-eyesight--outline--on.svg)  | mpa-eyesight--outline--on | 
| ![](./mpa-filter--filled.svg)  | mpa-filter--filled | 
| ![](./mpa-filter--outline.svg)  | mpa-filter--outline | 
| ![](./mpa-filter-settings.svg)  | mpa-filter-settings | 
| ![](./mpa-gallery.svg)  | mpa-gallery | 
| ![](./mpa-globe.svg)  | mpa-globe | 
| ![](./mpa-heart.svg)  | mpa-heart | 
| ![](./mpa-link.svg)  | mpa-link | 
| ![](./mpa-list-items.svg)  | mpa-list-items | 
| ![](./mpa-location-input.svg)  | mpa-location-input | 
| ![](./mpa-minus--filled.svg)  | mpa-minus--filled | 
| ![](./mpa-minus--line.svg)  | mpa-minus--line | 
| ![](./mpa-minus--outline.svg)  | mpa-minus--outline | 
| ![](./mpa-plus--filled.svg)  | mpa-plus--filled | 
| ![](./mpa-plus--line.svg)  | mpa-plus--line | 
| ![](./mpa-plus--outline.svg)  | mpa-plus--outline | 
| ![](./mpa-remove.svg)  | mpa-remove | 
| ![](./mpa-settings.svg)  | mpa-settings | 
| ![](./mpa-single-item.svg)  | mpa-single-item | 
| ![](./mpa-store.svg)  | mpa-store | 
| ![](./mpa-swap.svg)  | mpa-swap | 
| ![](./nav-arrow--left.svg)  | nav-arrow--left | 
| ![](./nav-arrow--right.svg)  | nav-arrow--right | 
| ![](./nav-caret--down.svg)  | nav-caret--down | 
| ![](./nav-caret--left.svg)  | nav-caret--left | 
| ![](./nav-caret--right.svg)  | nav-caret--right | 
| ![](./nav-caret--up.svg)  | nav-caret--up | 
| ![](./nav-home.svg)  | nav-home | 
| ![](./nav-minus.svg)  | nav-minus | 
| ![](./nav-plus.svg)  | nav-plus | 
| ![](./nav-thin-caret--left.svg)  | nav-thin-caret--left | 
| ![](./nav-thin-caret--right.svg)  | nav-thin-caret--right | 
| ![](./sti-check--filled.svg)  | sti-check--filled | 
| ![](./sti-check--line.svg)  | sti-check--line | 
| ![](./sti-check--outline.svg)  | sti-check--outline | 
| ![](./sti-clock.svg)  | sti-clock | 
| ![](./sti-close--filled.svg)  | sti-close--filled | 
| ![](./sti-close--line.svg)  | sti-close--line | 
| ![](./sti-close--outline.svg)  | sti-close--outline | 
| ![](./sti-discount.svg)  | sti-discount | 
| ![](./sti-equals.svg)  | sti-equals | 
| ![](./sti-loading.svg)  | sti-loading | 

## Contributors ✨

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [mansi-dhingani](https://github.com/mansi-dhingani) specification. Contributions of any kind are welcome!

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

<!-- DOCS-IGNORE:end -->