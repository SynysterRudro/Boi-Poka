import toast from "daisyui/components/toast";

const getStoredWishList = () => {

    const storedWishList = localStorage.getItem('wish-list');

    if (storedWishList) {
        const storedWishListArray = JSON.parse(storedWishList);
        return storedWishListArray;
    }

    else {
        return [];
    }
}

const addStoredWishList = (id) => {
    const storedWishList = getStoredWishList();

    if (storedWishList.includes(id)) {
        // already exists
        console.log(`Book with ID ${id} is already in the wish list.`);
    }

    else {
        storedWishList.push(id);
        const storedListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedListStr);
        toast('This book is added to your wish list');
    }
}


export { getStoredWishList, addStoredWishList };