let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let someElement = document.getElementById('content');
let playBtn = document.getElementById('toggleButton');

btn1.addEventListener('click', () => {
   someElement.style.backgroundImage = "url('images/background1.gif')"
});

btn2.addEventListener('click', () => {
   someElement.style.backgroundImage = "url('images/back2.gif')"
});

btn3.addEventListener('click', () => {
   someElement.style.backgroundImage = "url('images/back3.gif')"
});


var audio = document.getElementById('myAudio');
        var toggleButton = document.getElementById('toggleButton');
        var prevButton = document.getElementById('prevButton');
        var nextButton = document.getElementById('nextButton');
        var audioIsPlaying = false;

        // Danh sách các tệp âm thanh
        var audioFiles = ['audio1.mp3', 'audio2.mp3', 'audio3.mp3'];
        var currentAudioIndex = 0;

        // Cập nhật tệp âm thanh
        function updateAudioSource() {
            audio.src = audioFiles[currentAudioIndex];
        }

        // Chuyển đến audio trước
        function previousAudio() {
            if (currentAudioIndex > 0) {
                currentAudioIndex--;
                updateAudioSource();
                if (audioIsPlaying) audio.play();
            }
        }

        // Chuyển đến audio sau
        function nextAudio() {
            if (currentAudioIndex < audioFiles.length - 1) {
                currentAudioIndex++;
                updateAudioSource();
                if (audioIsPlaying) audio.play();
            }
        }

        function toggleAudio() {
            if (audioIsPlaying) {
                audio.pause();
                playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
                audioIsPlaying = false;
            } else {
                audio.play();
                playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
                audioIsPlaying = true;
            }
        } 
    


        toggleButton.addEventListener('click', toggleAudio);
        prevButton.addEventListener('click', previousAudio);
        nextButton.addEventListener('click', nextAudio);
