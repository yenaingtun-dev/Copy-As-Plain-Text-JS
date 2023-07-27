function copyAsPlainText(text) {
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = text;
    document.body.appendChild(tempTextArea);

    tempTextArea.select();
    document.execCommand("copy");

    document.body.removeChild(tempTextArea);
}

document.addEventListener("keydown", (e) => {
    if (e.altKey && e.ctrlKey) {
        if (window.getSelection)
        copyAsPlainText(window.getSelection().toString())
        // document.execCommand('copy');
    }
});
