const textTruncate = (string, number) => {
    if (string.length > number) {
        string = string.substring(0, number) + '...';
    }
    return string;
}

const products = [
    {
        name: 'IRON MAN',
        price: 1300000,
        imageURL: 'https://bepage.vn/upload/user/143/70_PD1519997087hhv.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt libero, veritatis delectus vitae, necessitatibus provident, omnis at officiis ab enim eos. Voluptate fugiat ex, suscipit quidem recusandae autem reiciendis dolorum!',
    },
    {
        name: 'IRON MAN 2',
        price: 1300000,
        imageURL: '	https://bepage.vn/upload/user/143/70_PD1519997093vOp.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt libero, veritatis delectus vitae, necessitatibus provident, omnis at officiis ab enim eos. Voluptate fugiat ex, suscipit quidem recusandae autem reiciendis dolorum!',
    },
    {
        name: 'IRON MAN 3',
        price: 1300000,
        imageURL: '	https://bepage.vn/upload/user/143/70_PD1519997087hhv.jpg',
        description: 'Phạm Trần Minh Quang',
    },
    {
        name: 'IRON MAN 4',
        price: 1300000,
        imageURL: '	https://bepage.vn/upload/user/143/70_PD1519997089Evl.jpg',
        description: 'Trần Đinh Anh Hùng',
    },
    {
        name: 'IRON MAN 6',
        price: 1300000,
        imageURL: 'https://bepage.vn/upload/user/143/70_PD1519997092b9r.jpg',
        description: 'Thầy Khánh',
    }
]
const productWrapper = document.querySelector('#productWrapper');

products.forEach((element, index) => {
    const productTemplate = document.querySelector('#productRowTemplate');
    const productFragment = productTemplate.content.cloneNode('true');
    const productElement = productFragment.querySelector('.productTemplate');

    //remove
    const removeBTN = productElement.querySelector('#removeBtn');
    removeBTN.addEventListener('click', () => {
        productWrapper.removeChild(productElement);
    }
    )




    const STT = productElement.querySelector('.STT');
    STT.innerText = index + 1;

    const Name = productElement.querySelector('.name');
    Name.innerText = element.name;

    const Price = productElement.querySelector('.price');
    Price.innerText = element.price + ' VND';

    const Image = productElement.querySelector('.image img');
    Image.src = element.imageURL;

    const description = productElement.querySelector('.description');
    description.innerText = textTruncate(element.description, 30);

    productWrapper.appendChild(productElement);
});

