function vocals(chaine,ckVocaliser=null) {
    if (!ckVocaliser || ckVocaliser.checked) {
        const utterThis = new SpeechSynthesisUtterance(chaine);
        utterThis.rate = 5;
        window.speechSynthesis.speak(utterThis);
    }
}
export default vocals
