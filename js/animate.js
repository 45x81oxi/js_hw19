function showAnimationElement(arr, flag) {
    // устанавливаем стартовое время для таймаута
    let timeout = 0;

    arr.forEach(item => {
        setTimeout(() => {
            flag ? transformElement(item) : animationElement(item);
        }, timeout);

        timeout += 400;
    });
}

function animationElement(element) {
    // шаг изменения своства
    let step = 0;

    function animateAction(time) {
        step += 0.03;
        element.style.opacity = step;
        const raf = requestAnimationFrame(animateAction);
        // проверяем если opacity < 1 то мы продолжаем делать requestAnimationFrame
        if (parseFloat(element.style.opacity) >= 1) {
            cancelAnimationFrame(raf);
        }
    }

    animateAction();
}


function transformElement(element) {
    // шаг изменения своства
    let step = 20;

    function animateAction(time) {
        step -= 0.5;
        element.style.transform = `translateY(${step}px)`;
        const raf = requestAnimationFrame(animateAction);
        if (step === 2) {
            cancelAnimationFrame(raf);
        }
    }

    animateAction();
}