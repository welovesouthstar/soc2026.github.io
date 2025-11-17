document.querySelectorAll('.faq-item').forEach(item => {
    // definicia - question, answer, toggle
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const toggle = item.querySelector('.faq-toggle');

    // novy event listener - click
    question.addEventListener('click', () => {
        // definicia isActive
        const isActive = answer.classList.contains('active');

        // zavriet vsetky ostatne FAQ
        document.querySelectorAll('.faq-answer').forEach(ans => {
            ans.classList.remove('active');
        });
        document.querySelectorAll('.faq-toggle').forEach(tog => {
            tog.classList.remove('active');
        });

        // active
        if (!isActive) {
            answer.classList.add('active');
            toggle.classList.add('active');
        }
    });
});