import axios from "axios";

export let loaded = false;
export let settings = {};

export async function load() {
    const response = await axios
        .get("/?view=settings", {
            responseType: "json"
        })
        .then((response) => response.data);

    loaded = true;
    settings = response;

    document.dispatchEvent(
        new CustomEvent("theme:settings:loaded", {
            detail: {
                settings
            }
        })
    );
}

export function get(name) {
    return settings[name];
}

export function all() {
    return settings;
}

export default {
    loaded,
    settings,
    load,
    get,
    all,
};