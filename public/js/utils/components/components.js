const createRow = () => createComponent({ element: 'div', class: 'row' })
const createColumn = () => createComponent({ 'element': 'div', 'class': 'col-sm' })

const createList = () => createComponent({ element: 'ul', class: 'list-group list-group-flush' })
const createListElement = () => createComponent({ element: 'li', class: 'list-group-item' })

const createCard = (name, image, comment, price, addID, removeID) => {
    return createComponent({
      'element': 'div',
      'class': 'card',
      'style': 'width: 18rem;',
  
      'children': [
        {
          'element': 'img',
          'src': image,
          'class': 'card-img-top'
        },
        {
          'element': 'div',
          'class': 'card-body',
          'children': [
            {
              'element': 'h5',
              'class': 'card-title',
              'innerHTML': name
            },
            {
              'element': 'p',
              'class': 'card-text',
              'innerHTML': comment
            },
            {
              'element': 'ul',
              'class': 'list-group',
              'children': [
                {
                  'element': 'li',
                  'class': 'list-group-item',
                  'innerHTML': 'Price: $' + price
                }
              ]
            },
            {
              'element': 'br'
            },
            {
              'element': 'button',
              'type': 'button',
              'class': 'btn btn-success',
              'id': addID,
              'innerHTML': 'Add'
            },
            {
              'element': 'button',
              'type': 'button',
              'class': 'btn btn-danger',
              'id': removeID,
              'innerHTML': 'Remove'
            }
          ]
        }
      ]
    })
  }
  