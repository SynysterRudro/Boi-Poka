import toast from "daisyui/components/toast";

const getStoredReadList = () => {

    const storedReadList = localStorage.getItem('read-list');

    if (storedReadList) {
        const storedReadListArray = JSON.parse(storedReadList);
        return storedReadListArray;
    }

    else {
        return [];
    }
}

const addStoredReadList = (id) => {
    const storedReadList = getStoredReadList();

    if (storedReadList.includes(id)) {
        // already exists
        console.log(`Book with ID ${id} is already in the read list.`);
    }

    else {
        storedReadList.push(id);
        const storedListStr = JSON.stringify(storedReadList);
        localStorage.setItem('read-list', storedListStr);

        // ideally we are not going to use toast here 

        toast('This book is marked as read');
    }
}


export { getStoredReadList, addStoredReadList };