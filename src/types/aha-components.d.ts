
declare type AlertLevel = typeof alertLevel[number];

declare const alertLevel: readonly ["info", "warning", "success", "danger"];

declare type AlignContent = typeof alignContent[number];

declare const alignContent: readonly ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly", "stretch", "baseline", "first baseline", "last baseline", "safe center", "unsafe center"];

declare type AlignItems = typeof alignItems[number];

declare const alignItems: readonly ["flex-start", "flex-end", "center", "stretch", "self-start", "self-end", "baseline", "first baseline", "last baseline", "safe center", "unsafe center"];

export declare namespace Components {
    export interface AhaAlert {
        /**
          * Controls the display of a dismissal icon on the alert that will destroy the alert on click.
         */
        "dismissable": boolean;
        /**
          * An optional text-only title to be placed at the top of the alert.  When a more complex title is required, the `heading` slot may be used to replace this property.  Using the property or slot ensures visual consistency across alerts. Avoid using headers (h1, h2, ...) or other design changing elements in an alert title.
         */
        "heading": string;
        /**
          * Controls the look and feel of the alert.  Select the appropriate type for your use case:    - `info`: When providing neutral or supplementary information.   - `success`: When indicating error-free completion of an action.   - `warning`: When caution is required from the user.   - `danger`: When indicating action failure or indicating caution relating to an unrecoverable or dangerous action.
         */
        "type": AlertLevel;
    }
    export interface AhaButton {
        /**
          * @ignore
         */
        "disabled": boolean;
        /**
          * An alternate appearance that removes the button's background.
         */
        "outline": boolean;
        /**
          * The size of the button.
         */
        "size": Size;
        /**
          * The appearance of the button. When in doubt, `default` is a safe bet.
         */
        "type": Type;
    }
    export interface AhaFadeOut {
        /**
          * Amount of time (in seconds) to wait before the fade animation begins.
         */
        "delay": number;
        /**
          * Amount of time (in seconds) the animation should take.
         */
        "duration": number;
        /**
          * An animation will not start unless paused is `false`.
         */
        "paused": boolean;
        /**
          * The timing function to use for the animation.
         */
        "timingFunction": TimingFunction;
        /**
          * Whether or not the element will have a `hidden` attribute set when the animation finishes. This effectively removes it from the DOM.
         */
        "willDisappear": boolean;
    }
    export interface AhaField {
        /**
          * An error string, used if a validation occurred for this field.  `aria-invalid` is automatically added to child `input` tags when this attribute is truthy.
         */
        "error": string | undefined;
        /**
          * Hint text, to help the user understand the intention of the form. When providing instructions, including formatting instructions, hint text is preferred over placeholders, because placeholders disappear when content is entered.
         */
        "hint": string | undefined;
        /**
          * The field's human-friendly label.  This is a plain string by default, but custom content can be added using the `label` slot.
         */
        "label": string;
    }
    export interface AhaFieldset {
        /**
          * The legend of the fieldset, which labels the grouped controls. Can be overriden using the `label` slot.
         */
        "legend": string;
        /**
          * The name of the fieldset, which is automatically passed down to child `aha-checkbox` and `aha-radio` elements.
         */
        "name": string;
    }
    export interface AhaFlex {
        /**
          * The distribution of space around child items along the cross axis.  See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content).
         */
        "alignContent": AlignContent;
        /**
          * How items are aligned along the flex container's cross axis.  See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items).
         */
        "alignItems": AlignItems;
        /**
          * The direction in which to layout children.  See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction).
         */
        "direction": FlexDirection;
        /**
          * The space to display between both rows and columns.  See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/gap).
         */
        "gap": string;
        /**
          * The distribution of space around items along the main axis.  See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content).
         */
        "justifyContent": JustifyContent;
        /**
          * Whether to wrap items onto multiple lines.  See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap).
         */
        "wrap": Wrap;
    }
    export interface AhaHelpPopover {
        /**
          * The heading of placed at the top of the popover. Generally, this should be written as a question. Example: heading="How can I use this widget?"
         */
        "heading": string;
        /**
          * Controls whether the popover is open or closed. The component will manage this property when clicked. `is-open` can be used used to override control.
         */
        "isOpen": boolean;
    }
    export interface AhaMenu {
        /**
          * The label for the menu, which will be inserted into the opener button. The entire button can be overridden using the `button` slot.
         */
        "label": string;
    }
    export interface AhaMenuItem {
        /**
          * Whether a menu item is currently selected or not.
         */
        "selected": boolean;
    }
    export interface AhaModalFooter {
    }
    export interface AhaModalHeader {
        /**
          * The heading given to the default `aha-help-popover` component in the header.
         */
        "helpHeading": string;
        /**
          * The optional, secondary subheader of the modal;
         */
        "modalSubtitle": string;
        /**
          * The primary header of the modal.
         */
        "modalTitle": string;
    }
    export interface AhaPanel {
        /**
          * Whether or not the panel should have a subtle drop shadow.
         */
        "boxShadow": boolean;
        /**
          * The title of the panel, shown as a heading.
         */
        "heading": string;
        /**
          * The heading level (h1, h2, h3, etc). Useful for ensuring a consistent heading hierarchy.
         */
        "headingLevel": 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
        /**
          * The ARIA role assigned to the container. By default, the container has a role of `region`, which implies that it is a crucial part of the document and allows screen readers to jump to it.
         */
        "role": string;
    }
    export interface AhaPill {
        /**
          * The color of the pill. Can be any CSS color string.  The color of the pill's text will be switched between white and black to ensure a high contrast ratio. Note that opacity of colors isn't considered in this determination, so use translucent colors with discretion.
         */
        "color": string;
    }
    export interface AhaRadio {
        /**
          * The input name. Note that this will be pulled from the parent aha-fielset if left blank.
         */
        "name": string | null;
        /**
          * The input value, which appears when serializing forms.
         */
        "value": string;
    }
    export interface AhaSpinner {
        /**
          * Sets the color of the spinner.
         */
        "color": string;
        /**
          * Sets the duration of the spinner animation (in seconds for 1 full loop of the animation).
         */
        "duration": number;
        /**
          * Sets the opacity of the spinner.
         */
        "opacity": number;
        /**
          * Pauses a spinner when set to `true`, animates when set to `false`.
         */
        "paused": boolean;
        /**
          * Sets the size of the spinner. By default it is 1.5 times the width of the `x` character in whatever font is applied. This way the size is relative to the surrounding text.
         */
        "size": string;
        /**
          * Sets the stroke of the spinner. By default it is the size of the spinner * 0.1
         */
        "stroke": string;
        /**
          * Adds a "track" to the spinner when set to true.
         */
        "track": boolean;
        /**
          * Sets the color of the track.
         */
        "trackColor": string;
        /**
          * Sets the opacity of the track.
         */
        "trackOpacity": number;
    }
    export interface AhaTab {
        /**
          * A number or some short text that appears next to the tab, usually to show a count of records inside or to indicate a number of unread items.
         */
        "badge"?: string;
        /**
          * Supply an `href` to have this tab operate as a link rather than a tab. If you've done this to one tab, you must do it to all tabs.
         */
        "href"?: string;
        /**
          * @ignore
         */
        "inMenu": boolean;
        /**
          * Equivalent to `<a rel>`. Has no effect unless `href` is set.
         */
        "rel"?: HTMLAnchorElement['rel'];
        /**
          * Whether this is the currently selected tab.
         */
        "selected": boolean;
        /**
          * Equivalent to `<a target>`. Has no effect unless `href` is set.
         */
        "target"?: HTMLAnchorElement['target'];
    }
    export interface AhaTabList {
        /**
          * @ignore
         */
        "selectTabAtIndex": (index: number) => Promise<void>;
    }
    export interface AhaTabPanel {
    }
    export interface AhaTabPanels {
        /**
          * @ignore
         */
        "showPanel": (visibleIndex: number) => Promise<void>;
    }
    export interface AhaTabs {
        "selectedTabIndex": number;
    }
}

declare type FlexDirection = typeof flexDirection[number];

declare const flexDirection: readonly ["row", "column", "row-reverse", "column-reverse"];

declare namespace JSX_2 {
    interface AhaAlert {
        /**
          * Controls the display of a dismissal icon on the alert that will destroy the alert on click.
         */
        "dismissable"?: boolean;
        /**
          * An optional text-only title to be placed at the top of the alert.  When a more complex title is required, the `heading` slot may be used to replace this property.  Using the property or slot ensures visual consistency across alerts. Avoid using headers (h1, h2, ...) or other design changing elements in an alert title.
         */
        "heading"?: string;
        /**
          * Controls the look and feel of the alert.  Select the appropriate type for your use case:    - `info`: When providing neutral or supplementary information.   - `success`: When indicating error-free completion of an action.   - `warning`: When caution is required from the user.   - `danger`: When indicating action failure or indicating caution relating to an unrecoverable or dangerous action.
         */
        "type"?: AlertLevel;
    }
    interface AhaButton {
        /**
          * @ignore
         */
        "disabled"?: boolean;
        /**
          * An alternate appearance that removes the button's background.
         */
        "outline"?: boolean;
        /**
          * The size of the button.
         */
        "size"?: Size;
        /**
          * The appearance of the button. When in doubt, `default` is a safe bet.
         */
        "type"?: Type;
    }
    interface AhaFadeOut {
        /**
          * Amount of time (in seconds) to wait before the fade animation begins.
         */
        "delay"?: number;
        /**
          * Amount of time (in seconds) the animation should take.
         */
        "duration"?: number;
        /**
          * An animation will not start unless paused is `false`.
         */
        "paused"?: boolean;
        /**
          * The timing function to use for the animation.
         */
        "timingFunction"?: TimingFunction;
        /**
          * Whether or not the element will have a `hidden` attribute set when the animation finishes. This effectively removes it from the DOM.
         */
        "willDisappear"?: boolean;
    }
    interface AhaField {
        /**
          * An error string, used if a validation occurred for this field.  `aria-invalid` is automatically added to child `input` tags when this attribute is truthy.
         */
        "error"?: string | undefined;
        /**
          * Hint text, to help the user understand the intention of the form. When providing instructions, including formatting instructions, hint text is preferred over placeholders, because placeholders disappear when content is entered.
         */
        "hint"?: string | undefined;
        /**
          * The field's human-friendly label.  This is a plain string by default, but custom content can be added using the `label` slot.
         */
        "label": string;
    }
    interface AhaFieldset {
        /**
          * The legend of the fieldset, which labels the grouped controls. Can be overriden using the `label` slot.
         */
        "legend": string;
        /**
          * The name of the fieldset, which is automatically passed down to child `aha-checkbox` and `aha-radio` elements.
         */
        "name": string;
    }
    interface AhaFlex {
        /**
          * The distribution of space around child items along the cross axis.  See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content).
         */
        "alignContent"?: AlignContent;
        /**
          * How items are aligned along the flex container's cross axis.  See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items).
         */
        "alignItems"?: AlignItems;
        /**
          * The direction in which to layout children.  See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction).
         */
        "direction"?: FlexDirection;
        /**
          * The space to display between both rows and columns.  See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/gap).
         */
        "gap"?: string;
        /**
          * The distribution of space around items along the main axis.  See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content).
         */
        "justifyContent"?: JustifyContent;
        /**
          * Whether to wrap items onto multiple lines.  See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap).
         */
        "wrap"?: Wrap;
    }
    interface AhaHelpPopover {
        /**
          * The heading of placed at the top of the popover. Generally, this should be written as a question. Example: heading="How can I use this widget?"
         */
        "heading"?: string;
        /**
          * Controls whether the popover is open or closed. The component will manage this property when clicked. `is-open` can be used used to override control.
         */
        "isOpen"?: boolean;
    }
    interface AhaMenu {
        /**
          * The label for the menu, which will be inserted into the opener button. The entire button can be overridden using the `button` slot.
         */
        "label"?: string;
    }
    interface AhaMenuItem {
        /**
          * Whether a menu item is currently selected or not.
         */
        "selected"?: boolean;
    }
    interface AhaModalFooter {
    }
    interface AhaModalHeader {
        /**
          * The heading given to the default `aha-help-popover` component in the header.
         */
        "helpHeading": string;
        /**
          * The optional, secondary subheader of the modal;
         */
        "modalSubtitle": string;
        /**
          * The primary header of the modal.
         */
        "modalTitle": string;
        /**
          * Event fired when the user activates the close icon.
         */
        "onAha-modal-header:close"?: (event: CustomEvent<any>) => void;
    }
    interface AhaPanel {
        /**
          * Whether or not the panel should have a subtle drop shadow.
         */
        "boxShadow"?: boolean;
        /**
          * The title of the panel, shown as a heading.
         */
        "heading": string;
        /**
          * The heading level (h1, h2, h3, etc). Useful for ensuring a consistent heading hierarchy.
         */
        "headingLevel"?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
        /**
          * The ARIA role assigned to the container. By default, the container has a role of `region`, which implies that it is a crucial part of the document and allows screen readers to jump to it.
         */
        "role"?: string;
    }
    interface AhaPill {
        /**
          * The color of the pill. Can be any CSS color string.  The color of the pill's text will be switched between white and black to ensure a high contrast ratio. Note that opacity of colors isn't considered in this determination, so use translucent colors with discretion.
         */
        "color": string;
    }
    interface AhaRadio {
        /**
          * The input name. Note that this will be pulled from the parent aha-fielset if left blank.
         */
        "name"?: string | null;
        /**
          * The input value, which appears when serializing forms.
         */
        "value": string;
    }
    interface AhaSpinner {
        /**
          * Sets the color of the spinner.
         */
        "color"?: string;
        /**
          * Sets the duration of the spinner animation (in seconds for 1 full loop of the animation).
         */
        "duration"?: number;
        /**
          * Sets the opacity of the spinner.
         */
        "opacity"?: number;
        /**
          * Pauses a spinner when set to `true`, animates when set to `false`.
         */
        "paused"?: boolean;
        /**
          * Sets the size of the spinner. By default it is 1.5 times the width of the `x` character in whatever font is applied. This way the size is relative to the surrounding text.
         */
        "size"?: string;
        /**
          * Sets the stroke of the spinner. By default it is the size of the spinner * 0.1
         */
        "stroke"?: string;
        /**
          * Adds a "track" to the spinner when set to true.
         */
        "track"?: boolean;
        /**
          * Sets the color of the track.
         */
        "trackColor"?: string;
        /**
          * Sets the opacity of the track.
         */
        "trackOpacity"?: number;
    }
    interface AhaTab {
        /**
          * A number or some short text that appears next to the tab, usually to show a count of records inside or to indicate a number of unread items.
         */
        "badge"?: string;
        /**
          * Supply an `href` to have this tab operate as a link rather than a tab. If you've done this to one tab, you must do it to all tabs.
         */
        "href"?: string;
        /**
          * @ignore
         */
        "inMenu"?: boolean;
        /**
          * @ignore
         */
        "onTabChosen"?: (event: CustomEvent<HTMLAhaTabElement>) => void;
        /**
          * Equivalent to `<a rel>`. Has no effect unless `href` is set.
         */
        "rel"?: HTMLAnchorElement['rel'];
        /**
          * Whether this is the currently selected tab.
         */
        "selected"?: boolean;
        /**
          * Equivalent to `<a target>`. Has no effect unless `href` is set.
         */
        "target"?: HTMLAnchorElement['target'];
    }
    interface AhaTabList {
        /**
          * @ignore
         */
        "onTabChosenAtIndex"?: (event: CustomEvent<number>) => void;
    }
    interface AhaTabPanel {
    }
    interface AhaTabPanels {
    }
    interface AhaTabs {
        "selectedTabIndex"?: number;
    }
    interface IntrinsicElements {
        "aha-alert": AhaAlert;
        "aha-button": AhaButton;
        "aha-fade-out": AhaFadeOut;
        "aha-field": AhaField;
        "aha-fieldset": AhaFieldset;
        "aha-flex": AhaFlex;
        "aha-help-popover": AhaHelpPopover;
        "aha-menu": AhaMenu;
        "aha-menu-item": AhaMenuItem;
        "aha-modal-footer": AhaModalFooter;
        "aha-modal-header": AhaModalHeader;
        "aha-panel": AhaPanel;
        "aha-pill": AhaPill;
        "aha-radio": AhaRadio;
        "aha-spinner": AhaSpinner;
        "aha-tab": AhaTab;
        "aha-tab-list": AhaTabList;
        "aha-tab-panel": AhaTabPanel;
        "aha-tab-panels": AhaTabPanels;
        "aha-tabs": AhaTabs;
    }
}
export { JSX_2 as JSX }

declare type JustifyContent = typeof justifyContent[number];

declare const justifyContent: readonly ["flex-start", "flex-end", "center", "left", "right", "space-between", "space-around", "space-evenly", "stretch", "baseline", "first baseline", "last baseline", "safe center", "unsafe center"];

declare type Size = typeof sizes[number];

declare const sizes: readonly ["mini", "small", "medium", "large"];

declare type TimingFunction = typeof timingFunctions[number];

declare const timingFunctions: readonly ["ease", "linear", "ease-in", "ease-out", "ease-in-out"];

declare type Type = typeof types[number];

declare const types: readonly ["default", "primary", "secondary", "success", "warning", "danger", "gray", "link", "attribute", "unstyled"];

declare type Wrap = typeof wrap[number];

declare const wrap: readonly ["nowrap", "wrap", "wrap-reverse"];

export { }

import type { HTMLAttributes } from 'react';

type StencilToReact<T> = {
  [P in keyof T]?: T[P] & HTMLAttributes<Element>;
};

declare global {
  namespace JSX {
    interface IntrinsicElements extends StencilToReact<JSX_2.IntrinsicElements> {}
  }
}
