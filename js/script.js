function newItem() {
    let li = $('<li></li>');
    let inputValue = $('input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        $('#list').append(li);
    }

    li.on("dblclick", function (crossOut) {
        li.toggleClass("strike");
    });
}