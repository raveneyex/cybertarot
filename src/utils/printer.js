const printSpreads = (files) => {
    console.log("The available spreads are:");
    files.forEach(filePath => {
        console.log(" * ", filePath.split('/').pop());
    });
}

const printer = {
    printSpreads 
};

export default printer;
