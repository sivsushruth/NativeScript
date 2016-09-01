import * as flexbox from "ui/layouts/flexbox-layout";

function set(what: string) {
    return function(args) {
        args.object.page.getViewById("container")[what] = args.object.text;
    }
}

export const flexDirection = set("flexDirection");
export const flexWrap = set("flexWrap");
export const justifyContent = set("justifyContent");
export const alignItems = set("alignItems");
export const alignContent = set("alignContent");

let lastSelection = null;
export function select(args) {
    if (lastSelection) {
        lastSelection.selected = "no";
        lastSelection.notify({ eventName: "selectedChange" });
    }
    console.log("Select: " + args.object);
    lastSelection = args.object;
    if (lastSelection) {
        lastSelection.selected = "yes";
        lastSelection.notify({ eventName: "selectedChange" });
    }
}

export function order({object}) {
    if (!lastSelection) {
        return;
    }
    let value = object.text;
    console.log("Set order " + value + " " + lastSelection);
    flexbox.FlexboxLayout.setOrder(lastSelection, object.text);
}

export function flexGrow({object}) {
    if (!lastSelection) {
        return;
    }
    let value = object.text;
    console.log("Set flexGrow " + value + " " + lastSelection);
    flexbox.FlexboxLayout.setFlexGrow(lastSelection, object.text);
}

export function flexShrink({object}) {
    if (!lastSelection) {
        return;
    }
    let value = object.text;
    console.log("Set flexShrink " + value + " " + lastSelection);
    flexbox.FlexboxLayout.setFlexShrink(lastSelection, object.text);
}

// TODO: Align self