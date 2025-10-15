const questions = document.querySelectorAll('.faq-question')

questions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling

    answer.classList.toggle('show')

    question.classList.toggle('active')
    if (question.classList.contains("active")){
      question.querySelector('.faq-arrow').style.transform = "rotateZ(180deg)"
    }else {
      question.querySelector('.faq-arrow').style.transform = "rotateZ(0)"
    }
  })
})
