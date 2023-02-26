const SC = document.getElementById('scissorsOp')
const RC = document.getElementById('rockOp')
const PR = document.getElementById('preview')
var tryOp = 0

// =========================================== //

function rockPreview() {
    PR.src="assets/img/rock.png"
}

function paperPreview() {
    PR.src="assets/img/paper.png"
}

function scissorsPreview() {
    PR.src="assets/img/scissors.png"
}

// =========================================== //

function rockTry() {
    PR.src="assets/img/rock.png"
    PR.style.scale="150%"
}

function paperTry() {
    PR.src="assets/img/paper.png"
    PR.style.scale="150%"
}

function scissorsTry() {
    PR.src="assets/img/scissors.png"
    PR.style.scale="150%"
    PR.style.opacity="100%"
}