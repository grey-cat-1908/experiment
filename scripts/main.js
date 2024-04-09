function onClick (_) {
    this.classList.add("selected");
    document.getElementsByClassName('container')[1].classList.add("selected");

    colors.splice(colors.indexOf(this.id), 1);

    answers.push(this.id.replace('#', '%23'));

    removeOnClick()

    setTimeout(() => {
        document.getElementsByClassName('container')[1].classList.remove("selected");
        build();
    }, 1500);
}

function removeOnClick () {
    let elements = document.getElementsByClassName('card');

    for (let i = 0; i < elements.length; i++) {
        elements[i].removeEventListener('click', onClick);
    }
}

function addOnClick () {
    let elements = document.getElementsByClassName('card');

    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener('click', onClick)
    }
}

function build () {
    if (colors.length == 10 && document.referrer != 'https://arbuz.icu/') {
        window.location.replace('https://arbuz.icu/experiments/00001')
    }

    if (colors.length == 0) {
        const button = document.createElement('button')
        button.style.visibility= 'hidden';

        button.onclick = () => {
            try {
                let w = window.open(`https://docs.google.com/forms/d/e/1FAIpQLSe1ae5HVUjaCE6ECDGMQggpzw67prmEWC1sW1sMMEK9bnboWQ/formResponse?entry.2052251640=${answers[0]}&entry.1737390312=${answers[1]}&entry.1094635230=${answers[2]}&entry.1626354024=${answers[3]}&entry.863471071=${answers[4]}&entry.1104590094=${answers[5]}&entry.764460179=${answers[6]}&entry.1311977414=${answers[7]}&entry.951371140=${answers[8]}&entry.870034211=${answers[9]}`, 'Arbuz: Experiment #1', 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,height=300,width=200');
    
                setTimeout(function () {
                    w.close();
                    window.location.replace('https://arbuz.icu/experiments/end/');
                }, 5000);
            } catch (e) {
                window.location.replace('`https://docs.google.com/forms/d/e/1FAIpQLSe1ae5HVUjaCE6ECDGMQggpzw67prmEWC1sW1sMMEK9bnboWQ/formResponse?entry.2052251640=${answers[0]}&entry.1737390312=${answers[1]}&entry.1094635230=${answers[2]}&entry.1626354024=${answers[3]}&entry.863471071=${answers[4]}&entry.1104590094=${answers[5]}&entry.764460179=${answers[6]}&entry.1311977414=${answers[7]}&entry.951371140=${answers[8]}&entry.870034211=${answers[9]}`');
            }
        };

        button.click();
        return;
    }
    
    shuffleArray(colors);
    
    let base = document.getElementsByClassName('container')[1];
    
    let number = document.getElementById('number');

    if (colors.length != 10) {
        base.classList.remove('animate__slideInLeft');

        number.classList.remove('animate__fadeIn');
        number.classList.add('animate__fadeOut');
    }

    base.innerHTML = '';

    setTimeout(function () {

        number.innerHTML = Math.abs(colors.length - 10);
        
        number.classList.remove('animate__fadeOut')
        number.classList.add('animate__fadeIn');

        setTimeout(function () {
            for (let i = 0; i < colors.length; i++) {
                let element = document.createElement("div");
        
                element.classList.add('card');
                element.id = colors[i];;
                element.style = `background-color: ${colors[i]}`;
        
                base.appendChild(element);
            }

            addOnClick();

            base.classList.add('animate__slideInLeft');
        }, 600);
    }, 400);
}

build();
