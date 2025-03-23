// tab animations
document.addEventListener("DOMContentLoaded",function (){
    const tabs = document.querySelectorAll(".code-container__tab");
    const codeBlocks = document.querySelectorAll(".code-container__code");

    tabs.forEach(tab =>{
        tab.addEventListener("click",function (){
            const language =this.getAttribute("data-language");

            // remove class from all tabs and code blocks
            tabs.forEach(t=> t.classList.remove("code-container__tab--active"));
            codeBlocks.forEach(c=>c.classList.remove("code-container__code--active"));

            // add active class to the clicked tab and corrosponding code block

            this.classList.add("code-container__tab--active");
            document.querySelector(`.code-container__code--${language}`).classList.add("code-container__code--active");

            // re-highlight the code block formprism.js
            Prism.highlightElement(document.querySelector(`.code-container__code--${language} code`));
    });

});




// FOOTER ANIMATION
const footer = document.querySelector('.footer__inner');
const footerSpans = footer.querySelectorAll('span');
const observer= new IntersectionObserver( entries =>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            footerSpans.forEach((span,index)=>{
                setTimeout(()=>{
                    span.classList.add('animate');
                },index *100);
            });
            observer.unobserve(footer);
        }
    });
}, {
    threshold: 0.1
});
observer.observe(footer);

})


function copyCode() {
    const codeElement = document.querySelector('.code-container__code--active code');
    const codeText = codeElement.innerText;

    navigator.clipboard.writeText(codeText).then(() => {
        alert('Code copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy code: ', err);
    });
}