export function clickOutside(node) {

    function handleClick(event: Event) {
        if (node && !node.contains(event.target) && !event.defaultPrevented) {
            node.dispatchEvent(new CustomEvent('clickoutside'));
        }
    }

    document.addEventListener("click", handleClick, true);

    return {
        destroy() {
            document.removeEventListener("click", handleClick, true);
        }
    };
}