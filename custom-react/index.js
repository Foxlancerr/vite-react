/**
 * This is the logics which react used behind the scenes
 * ***************************************************
 */

const root = document.querySelector("#root");

const h1Element = {
    type: "h1",
    props: {
        id: "h1-id",
        class: "h1-class"
    },
    contents: "Some text"
}

function customRender(el, root) {
    const domElement = document.createElement(el.type);
    domElement.innerHTML = el.contents;
    for (const att in el.props) {
        domElement.setAttribute(att, el.props[att])
        console.log(att, el.props);
    }
    root.appendChild(domElement)



}
customRender(h1Element, root)