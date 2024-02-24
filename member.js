function countAndReturnString() {
    let count = 0;
    const interval = setInterval(() => {
        count++;
        if (count === 15) {
            clearInterval(interval);
            return "Counting completed!";
        }
    }, 1000);
}

countAndReturnString();
