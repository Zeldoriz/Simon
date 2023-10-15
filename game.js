var buttonColors = []
var gamePattern = [],
    userChosenPattern = []
buttonColors.push('red', 'blue', 'green', 'yellow')
var gameStarted = false
var level = 0
var playerClicks = -1

function nextSeq() {
    playerClicks = -1
    level++
    $('h1').text("Level " + level)
    var randNum = Math.floor(Math.random() * 4)
    var chosenColor = buttonColors[randNum]
    gamePattern.push(chosenColor)
    $("#" + chosenColor).addClass("pressed")

    setTimeout(function () {
        $("#" + chosenColor).removeClass("pressed")
    }, 100)

    switch (chosenColor) {
        case ("red"):
            var audio = new Audio("sounds/red.mp3")
            audio.volume = 0.1
            audio.play()
            break
        case ("blue"):
            var audio = new Audio("sounds/blue.mp3")
            audio.volume = 0.1
            audio.play()
            break
        case ("green"):
            var audio = new Audio("sounds/green.mp3")
            audio.volume = 0.1
            audio.play()
            break
        case ("yellow"):
            var audio = new Audio("sounds/yellow.mp3")
            audio.volume = 0.1
            audio.play()
            break
    }
}

$(document).on('keydown', function () {
    if (!gameStarted) {
        gameStarted = true
        nextSeq()
        $('h1').text("Level " + level)
    }
})

$(".btn").on('click', function (event) {
    if (gameStarted) {
        playerClicks++;
        var userChosenColor = (event.currentTarget.classList[1])
        userChosenPattern.push(userChosenColor)

        var userPressed = $("#" + userChosenColor)
        userPressed.addClass("pressed")
        setTimeout(function () {
            userPressed.removeClass("pressed")
        }, 100)

        switch (userChosenColor) {
            case ("red"):
                var audio = new Audio("sounds/red.mp3")
                audio.volume = 0.1
                audio.play()
                break
            case ("blue"):
                var audio = new Audio("sounds/blue.mp3")
                audio.volume = 0.1
                audio.play()
                break
            case ("green"):
                var audio = new Audio("sounds/green.mp3")
                audio.volume = 0.1
                audio.play()
                break
            case ("yellow"):
                var audio = new Audio("sounds/yellow.mp3")
                audio.volume = 0.1
                audio.play()
                break
        }

        if (checkAnswer() && userChosenPattern.length == level) {
            setTimeout(function () {
                nextSeq()
                userChosenPattern.splice(0, userChosenPattern.length)
            }, 1000)
            console.log("pass")

        } else if (!checkAnswer()) {
            $('body').addClass("game-over")
            $('h1').text("Game Over!")
            setTimeout(function () {
                $('body').removeClass("game-over")
                $('h1').text("Press A Key to Start")
                gameStarted = false
                gamePattern.splice(0, gamePattern.length)
                userChosenPattern.splice(0, userChosenPattern.length)
                level = 0
            }, 500)
            console.log("lost")
        }
        // console.log(userChosenPattern.length, level)
    }
})

function checkAnswer() {
    if (userChosenPattern[playerClicks] == gamePattern[playerClicks]) {
        return true
    } else
        return false
}