export function preventDoublePlayAndTriggerNextPlay(e, index) {
    // code from https://github.com/buckypinkman/quran-online/blob/master/mixins/audio.js
    const allAudio = document.querySelectorAll('.' + e.target.className)
    for (let i = 0; i < allAudio.length; i++) {
      if (allAudio[i] != e.target) {
        allAudio[i].pause();
      }
    }

    e.target.onended = () => {
            if(e.target != allAudio[allAudio.length - 1]){
            const nextAudioEl = e.target.parentElement.parentElement.nextSibling.children[0].children[1]
            nextAudioEl.play()
            }
}

e.target.onplaying = () => {
            if(e.target != allAudio[allAudio.length - 1]){
                const nextAudioEl = e.target.parentElement.parentElement.nextSibling.children[0].children[1];
                nextAudioEl.currentTime = 0;
                nextAudioEl.preload = true
            }
    }

    // .push({
    //   path: `#ayah-${index + 1}`
    // })
  };