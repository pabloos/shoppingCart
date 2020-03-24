
const createComponent = (object) => {
  let component

  const hash = {
    'element': () => component = document.createElement(object.element),

    'style': () => component.setAttribute('style', object.style),

    'id': () => component.setAttribute('id', object.id),
    'class': () => component.setAttribute('class', object.class),
    'src': () => component.setAttribute('src', object.src),
    'type': () => component.setAttribute('type', object.type),
    'for': () => component.setAttribute('for', object.for),
    'ariaLabel': () => component.setAttribute('ariaLabel', object.ariaLabel),

    'innerHTML': () => component.innerHTML = object.innerHTML,

    'value': () => component.setAttribute('value', object.value),

    'dataToggle': () => component.setAttribute('data-toggle', object.dataToggle),
    'dataTarget': () => component.setAttribute('data-target', object.dataTarget),

    'dataDismiss': () => component.setAttribute('data-dismiss', object.dataDismiss),

    'children': () => object.children.forEach(child => component.appendChild(createComponent(child))),

    // 'script': () => component.script = object.script,

    'onclick': () => component.addEventListener('click', object.onclick)
  }

  const properties = Object.keys(object)

  for (let key in properties) {
    hash[properties[key]]()
  }

  return component
}

