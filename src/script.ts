type menuItem = {
    id: number;
    title: string;
    category: string;
    price: number;
    img: string;
    desc: string;
};

const menu: menuItem[] = [
    {
        id: 1,
        title: "Pancake",
        category: "breakfast",
        price: 59.0,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.12SGaJ24H4XPkhtqxh4n-AHaEr%26pid%3DApi&f=1",
        desc: "Adipisicing laboris aute incididunt commodo Lorem dolore.Velit aliqua eu aliquip do voluptate ad nisi commodo culpa.",
    },
    {
        id: 2,
        title: "Milk Shake",
        category: "shake",
        price: 59.0,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.oQX01TlBgGIeuhGgu_ELyQHaE8%26pid%3DApi&f=1",
        desc: "Nostrud adipisicing et ex consectetur incididunt est sit Lorem anim proident quis exercitation anim.Velit exercitation non exercitation officia incididunt commodo officia occaecat elit exercitation aute non qui.",
    },
    {
        id: 3,
        title: "Dosa",
        category: "breakfast",
        price: 59.0,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.AAeMOleCsTZ6bN_MA_cQqQHaEK%26pid%3DApi&f=1",
        desc: "Ullamco reprehenderit nulla irure cillum.Nisi velit in ad officia consectetur culpa irure cillum aliqua incididunt sunt enim sit dolore.",
    },
    {
        id: 4,
        title: "Biriyani",
        category: "lunch",
        price: 59.0,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjfwonline.com%2Fwp-content%2Fuploads%2F2016%2F04%2FMalabar-Biriyani-JFW-magazine.jpg&f=1&nofb=1",
        desc: "Do minim quis ut ex eiusmod laboris incididunt ad dolor exercitation ipsum non esse.Magna adipisicing eiusmod in adipisicing Lorem labore consectetur est aliqua.",
    },
    {
        id: 5,
        title: "Thali",
        category: "lunch",
        price: 59.0,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcurlytales.com%2Fwp-content%2Fuploads%2F2020%2F10%2FNavratri-Thali-1170x614.jpg&f=1&nofb=1",
        desc: "Ut incididunt nisi ut culpa duis nulla aliqua qui nulla pariatur incididunt Lorem.Tempor consequat commodo incididunt exercitation commodo aliquip non.",
    },
    {
        id: 6,
        title: "Idli",
        category: "breakfast",
        price: 59.0,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.DnlG3_D2vo-EHRrNV0YCjgHaD4%26pid%3DApi&f=1",
        desc: "Labore ullamco consequat amet veniam ullamco esse fugiat sit pariatur consequat nulla quis.Cillum tempor duis labore laborum.",
    },
    {
        id: 7,
        title: "Fried Rice",
        category: "lunch",
        price: 59.0,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.ug7mcOMWDCGNYWMVONgcgwHaE8%26pid%3DApi&f=1",
        desc: "Consectetur irure laboris ex Lorem exercitation nulla occaecat commodo aliquip.Enim adipisicing cupidatat consequat ullamco ipsum fugiat ut laborum.",
    },
    {
        id: 8,
        title: "Oreo Shake",
        category: "shake",
        price: 59.0,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.archanaskitchen.com%2Fimages%2Farchanaskitchen%2F1-Author%2FWaagmi_Soni%2Foreo-milkshake-recipe.jpg&f=1&nofb=1",
        desc: "Velit velit ad tempor id nulla reprehenderit est esse.Ullamco non eu duis ut ad consectetur.",
    },
    {
        id: 9,
        title: "Porotta",
        category: "bread",
        price: 59.0,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.onmanorama.com%2Fcontent%2Fdam%2Fmm%2Fen%2Flifestyle%2Fhealth%2Fimages%2F2019%2F9%2F13%2Fmaida-porotta-health-c.jpg&f=1&nofb=1",
        desc: "Sunt ea incididunt tempor aliquip mollit ea proident.In commodo in irure laborum.",
    },
    {
        id: 10,
        title: "Chappatti",
        category: "bread",
        price: 59.0,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fwww.wiwigo.com%2Fblog%2Fwp-content%2Fuploads%2F2016%2F07%2Ftandoori-roti.jpg%3Fresize%3D1314%252C798%26ssl%3D1&f=1&nofb=1",
        desc: "Exercitation commodo do cillum tempor ut laborum excepteur adipisicing excepteur ea.Dolor dolore ipsum sunt ullamco Lorem ullamco.",
    },
    {
        id: 11,
        title: "Chicken Curry",
        category: "curry",
        price: 59.0,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.icy3KmSHqmYPwoqkUEq7rQHaE7%26pid%3DApi&f=1",
        desc: "Non velit commodo nisi laboris laborum anim tempor duis magna quis exercitation labore officia nisi.Magna cillum ex amet dolor sint amet ipsum excepteur mollit ut.",
    },
    {
        id: 12,
        title: "Veg Kurma",
        category: "curry",
        price: 59.0,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.BLyCnwsr_mYwLz8cGG_NaAHaE9%26pid%3DApi&f=1",
        desc: "Dolor sit quis sunt ad sunt Lorem.Exercitation anim nisi id deserunt in aliqua ipsum.",
    },
    {
        id: 13,
        title: "Orange Juice",
        category: "juice",
        price: 59.0,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.zdigWtXe1c1nK3DBsqpN_AHaFD%26pid%3DApi&f=1",
        desc: "Labore consectetur reprehenderit amet quis.Voluptate mollit sit quis ullamco excepteur eu non ut dolore sit.",
    },
];

function createMenuItem(item: menuItem) {
    let e = document.createElement("div");
    e.classList.add("item");
    e.innerHTML = `
    <img src="${item.img}" alt="${item.title} image">
    <div class="item-text">
    <div class="item-title">${item.title}</div>
    <div class="item-body">${item.desc}</div>
    <div class="item-title price-title">Price</div>
    <div class="item-price">₹${item.price}</div>
    </div>`;
    return e;
}

function loadMenuItems() {
    let wrapper = document.querySelector(".menu") as HTMLElement;
    for (const item of menu) {
        let itemElement = createMenuItem(item);
        wrapper.appendChild(itemElement);
    }
}

function loadMenuItemsByTag(tag: string) {
    let wrapper = document.querySelector(".menu") as HTMLElement;
    let parent = wrapper.parentNode as HTMLElement;
    parent.removeChild(wrapper);
    let newWrapper = document.createElement("div") as HTMLElement;
    newWrapper.classList.add("menu");
    parent.appendChild(newWrapper);

    for (const item of menu) {
        if (item.category === tag || tag == "all") {
            let itemElement = createMenuItem(item);
            newWrapper.appendChild(itemElement);
        }
    }
}

function createFilterButton(tag: string) {
    let button = document.createElement("button") as HTMLButtonElement;
    button.onclick = () => {
        loadMenuItemsByTag(tag);
    };
    button.classList.add('tag-button');
    button.innerHTML = `${tag.toUpperCase()}`;
    return button;
}

function loadTags() {
    let tags = new Set<string>(["all"]);
    for (const i of menu) {
        tags.add(i.category);
    }
    let buttons = document.querySelector(".filters") as HTMLElement;
    for (const tag of tags) {
        let tagElement = createFilterButton(tag);
        buttons.appendChild(tagElement);
    }
}

window.onload = () => {
    loadTags();
    loadMenuItems();
};
