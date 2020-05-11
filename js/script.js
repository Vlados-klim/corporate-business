$(document).on("click", "#btnRight", onRightClick);
$(document).on("click", "#btnLeft", onLeftClick);

function onRightClick() {
    let first = $(".main__partner__logo__icon:first-child");
    let last = $(".main__partner__logo__icon:last-child");
    first.get(0).before(last.get(0));
    $(".main__partner__logo__icon").fadeOut(0).fadeIn(50);
}

function onLeftClick() {
    let first = $(".main__partner__logo__icon:first-child");
    let last = $(".main__partner__logo__icon:last-child");
    last.get(0).after(first.get(0));
    $(".main__partner__logo__icon").fadeOut(0).fadeIn(50);
}
