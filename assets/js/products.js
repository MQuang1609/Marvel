const productWrapper = document.querySelector('#productWrapper');

const textTruncate = (string, number) => {
    if (string.length > number) {
        string = string.substring(0, number) + '...';
    }
    return string;
}

const products = [
    {
        name: 'IRON MAN',
        id: 'id-' + Math.round((Math.random() * 1000)),
        price: 1300000,
        imageURL: 'https://bepage.vn/upload/user/143/70_PD1519997087hhv.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt libero, veritatis delectus vitae, necessitatibus provident, omnis at officiis ab enim eos. Voluptate fugiat ex, suscipit quidem recusandae autem reiciendis dolorum!',
    },
    {
        name: 'IRON MAN 2',
        id: 'id-' + Math.round((Math.random() * 1000)),
        price: 1300000,
        imageURL: '	https://bepage.vn/upload/user/143/70_PD1519997093vOp.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt libero, veritatis delectus vitae, necessitatibus provident, omnis at officiis ab enim eos. Voluptate fugiat ex, suscipit quidem recusandae autem reiciendis dolorum!',
    },
    {
        name: 'IRON MAN 3',
        id: 'id-' + Math.round((Math.random() * 1000)),
        price: 1300000,
        imageURL: '	https://bepage.vn/upload/user/143/70_PD1519997087hhv.jpg',
        description: 'Phạm Trần Minh Quang',
    },
    {
        name: 'IRON MAN 4',
        id: 'id-' + Math.round((Math.random() * 1000)),
        price: 1300000,
        imageURL: '	https://bepage.vn/upload/user/143/70_PD1519997089Evl.jpg',
        description: 'Trần Đinh Anh Hùng',
    },
    {
        name: 'IRON MAN 6',
        id: 'id-' + Math.round((Math.random() * 1000)),
        price: 1300000,
        imageURL: 'https://bepage.vn/upload/user/143/70_PD1519997092b9r.jpg',
        description: 'Thầy Khánh',
    }
]
let setLocalStorage = (products) => {
    return localStorage.setItem('products', JSON.stringify(products));
}
const local = setLocalStorage(products);

let getLocalStorage = () => {
    return localStorage.getItem('products', JSON.stringify(products)) ? JSON.parse(localStorage.getItem('products', JSON.stringify(products))) : [];
}



const builProductsTempale = (item, index) => {
    const productTemplate = document.querySelector('#productRowTemplate');
    const productFragment = productTemplate.content.cloneNode('true');
    const productElement = productFragment.querySelector('.productTemplate');

    const STT = productElement.querySelector('.STT');
    STT.innerText = index + 1;

    const Name = productElement.querySelector('.name');
    Name.innerText = item.name;

    const Price = productElement.querySelector('.price');
    Price.innerText = item.price + ' VND';

    const Image = productElement.querySelector('.image img');
    Image.src = item.imageURL;

    const description = productElement.querySelector('.description');
    description.innerText = textTruncate(item.description, 30);



    //remove
    const removeBTN = productElement.querySelector('#removeBtn');
    removeBTN.addEventListener('click', () => {
        const productIndex = products.findIndex((element2) => {
            return element2.id === item.id;
        });
        if (productIndex !== -1) {
            products.splice(productIndex, 1);
            productWrapper.removeChild(productElement);
            setLocalStorage(products);
            getLocalStorage();
        }
    }
    )

    return productElement;
}


products.forEach((element, index) => {
    const productElement = builProductsTempale(element, index);
    setLocalStorage(products);
    getLocalStorage();
    productWrapper.appendChild(productElement);
});

